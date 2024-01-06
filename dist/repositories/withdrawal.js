"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithdrawalRepository = void 0;
var _withdrawal = require("../models/withdrawal");
var _database = require("@medusajs/medusa/dist/loaders/database");
var WithdrawalRepository = exports.WithdrawalRepository = _database.dataSource.getRepository(_withdrawal.Withdrawal).extend({
  customMethod: function customMethod() {
    // TODO add custom implementation
    return;
  }
});
var _default = exports["default"] = WithdrawalRepository;