"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const precoImovelService_1 = __importDefault(require("../../services/precoImovelService"));
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
const rabbitmq_server_1 = __importDefault(require("../../../../shared/rabbitmq-server"));
class StartServiceController {
    async show(request, response) {
        try {
            const server = new rabbitmq_server_1.default('amqp://admin:admin@rabbitmq:5672');
            await server.start();
            await server.createQueue('fila01');
            await server.createQueue('fila02');
            await server.consume('fila01', async (message) => {
                //Envia para a fila02
                const precoService = new precoImovelService_1.default();
                const preco = precoService.find();
                await server.publishInQueue('fila02', JSON.stringify(preco));
            });
            return response.status(204).send();
        }
        catch (error) {
            if (error instanceof AppError_1.default) {
                return response.status(error.statusCode).json({ error: error.message });
            }
            return response.status(500).json({ error: error.message });
        }
    }
}
exports.default = StartServiceController;
