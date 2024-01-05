"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalRepository = void 0;
const withdrawal_1 = require("../models/withdrawal");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.WithdrawalRepository = database_1.dataSource
    .getRepository(withdrawal_1.Withdrawal)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.WithdrawalRepository;
