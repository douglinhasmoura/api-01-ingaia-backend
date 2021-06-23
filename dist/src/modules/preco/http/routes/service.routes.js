"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StartService_1 = __importDefault(require("../controllers/StartService"));
const startRouter = express_1.Router();
const startController = new StartService_1.default();
startRouter.get('/', startController.show);
exports.default = startRouter;
