"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = __importDefault(require("./controller/home.controller"));
class ExpressRouter {
    constructor(app) {
        this.router = express_1.Router();
        this.app = app;
    }
    init() {
        this.router.get('/', home_controller_1.default.getDefault);
        this.app.use('/', this.router);
    }
}
exports.default = ExpressRouter;
//# sourceMappingURL=express.router.js.map