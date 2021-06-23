"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("@shared/infra/http/server"));
describe('Teste controller', () => {
    it('should status 200', async () => {
        const res = await supertest_1.default(server_1.default).get('/preco');
        expect(res.statusCode).toEqual(200);
    });
});
