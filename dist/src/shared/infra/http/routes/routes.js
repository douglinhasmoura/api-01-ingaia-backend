"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preco_routes_1 = __importDefault(require("../../../../modules/preco/http/routes/preco.routes"));
const routes = express_1.Router();
routes.use('/preco', preco_routes_1.default);
// routes.use('/service', startRouter)
exports.default = routes;
