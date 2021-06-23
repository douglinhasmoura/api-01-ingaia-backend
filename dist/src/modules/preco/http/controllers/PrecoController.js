"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const precoImovelService_1 = __importDefault(require("../../services/precoImovelService"));
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
class PrecoController {
    show(request, response) {
        try {
            const precoService = new precoImovelService_1.default();
            const preco = precoService.find();
            return response.json({ preco });
        }
        catch (error) {
            if (error instanceof AppError_1.default) {
                return response.status(error.statusCode).json({ error: error.message });
            }
            return response.status(500).json({ error: error.message });
        }
    }
}
exports.default = PrecoController;
