"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const precoImovelService_1 = __importDefault(require("./precoImovelService"));
//unit test
describe('find', () => {
    it('should be find price of the property', () => {
        const precoImovelService = new precoImovelService_1.default();
        const data = precoImovelService.find();
        expect(data).toHaveProperty('valor');
    });
});
