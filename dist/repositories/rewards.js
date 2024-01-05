"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsRepository = void 0;
const rewards_1 = require("../models/rewards");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.RewardsRepository = database_1.dataSource
    .getRepository(rewards_1.Rewards)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.RewardsRepository;
