"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../shared/infra/repositories/database/database"));
class PrecoImovelService {
    find() {
        const precoBD = new database_1.default();
        const preco = precoBD.find();
        return preco;
    }
}
exports.default = PrecoImovelService;
