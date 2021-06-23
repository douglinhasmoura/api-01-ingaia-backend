"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class database {
    preco = { valor: 0 };
    constructor() {
        this.preco.valor = 2000;
    }
    find() {
        return this.preco;
    }
}
exports.default = database;
