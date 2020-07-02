"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const app = express_1.default();
const port = process.env.PORT || '8000';
app.get('/', handlers_1.rootHandler);
app.get('/hello/:name', handlers_1.helloHandler);
app.listen(port, err => {
    if (err)
        return console.error(err);
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map