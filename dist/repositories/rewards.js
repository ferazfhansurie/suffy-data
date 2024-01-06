"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RewardsRepository = void 0;
var _rewards = require("../models/rewards");
var _database = require("@medusajs/medusa/dist/loaders/database");
var RewardsRepository = exports.RewardsRepository = _database.dataSource.getRepository(_rewards.Rewards).extend({
  customMethod: function customMethod() {
    // TODO add custom implementation
    return;
  }
});
var _default = exports["default"] = RewardsRepository;