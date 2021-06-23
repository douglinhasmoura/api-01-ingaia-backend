"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = require("amqplib");
class RabbitmqServer {
    uri;
    conn;
    channel;
    constructor(uri) {
        this.uri = uri;
    }
    async start() {
        this.conn = await amqplib_1.connect(this.uri);
        this.channel = await this.conn.createChannel();
    }
    async checkQueue(queue) {
        if (this.channel) {
            const check = await this.channel.checkQueue(queue);
            if (check.messageCount > 0) {
                return true;
            }
        }
        return false;
    }
    async createQueue(queue) {
        if (this.channel) {
            await this.channel.assertQueue(queue);
        }
    }
    async publishInQueue(queue, message) {
        // await this.channel.assertQueue(queue,{ durable: false});
        const result = this.channel?.sendToQueue(queue, Buffer.from(message));
        console.log(" [x] Sent %s", message);
        return result || false;
    }
    // async publishInExchange(
    //   exchange: string,
    //   routingKey: string,
    //   message: string
    // ): Promise<boolean> {
    //   return this.channel.publish(exchange, routingKey, Buffer.from(message));
    // }
    async consume(queue, callback) {
        return this.channel?.consume(queue, (message) => {
            if (message) {
                callback(message);
                this.channel?.ack(message);
            }
            console.log(" [x] Receive %s", message?.content);
        });
    }
}
exports.default = RabbitmqServer;
