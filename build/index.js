"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const helmet_1 = __importDefault(require("helmet"));
const PORT = process.env.PORT || 3005;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(router_1.default);
(async function bootstrap() {
    app.listen(PORT, () => {
        console.log("⍦ Ready to serve on port " + PORT + " ☭");
    });
})();
