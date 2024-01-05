"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeemRepository = void 0;
const redeem_1 = require("../models/redeem");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.RedeemRepository = database_1.dataSource
    .getRepository(redeem_1.Redeem)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.RedeemRepository;
