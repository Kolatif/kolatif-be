"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_router_1 = __importDefault(require("./express.router"));
const app = express_1.default();
const expressRoutes = new express_router_1.default(app);
expressRoutes.init();
app.listen(process.env.PORT, () => {
    console.log(`Express server app listening on port ${process.env.PORT}!`);
});
//# sourceMappingURL=app.js.map