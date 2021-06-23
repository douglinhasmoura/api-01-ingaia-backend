"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrecoController_1 = __importDefault(require("../controllers/PrecoController"));
const precoRouter = express_1.Router();
const precoController = new PrecoController_1.default();
/**
 * @swagger
 * /preco:
 *   get:
 *     description: Metódo responsável para retornar o valor de um m².
 *     responses:
 *       200:
 *         description: Retorna o valor do m².
 */
precoRouter.get('/', precoController.show);
exports.default = precoRouter;
