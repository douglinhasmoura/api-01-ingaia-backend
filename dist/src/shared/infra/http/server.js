"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../http/routes/routes"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const PORT = process.env.PORT || 3001;
const app = express_1.default();
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API-01',
            version: '1.0.0'
        }
    },
    apis: ['./dist/src/modules/preco/http/routes/*.js']
};
app.use(express_1.default.json());
app.use(routes_1.default);
const swaggerDocs = swagger_jsdoc_1.default(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.listen(PORT, async () => {
    console.log(`Server Started on port: ${PORT}`);
});
exports.default = app;
