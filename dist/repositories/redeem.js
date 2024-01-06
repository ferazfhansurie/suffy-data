"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RedeemRepository = void 0;
var _redeem = require("../models/redeem");
var _database = require("@medusajs/medusa/dist/loaders/database");
var RedeemRepository = exports.RedeemRepository = _database.dataSource.getRepository(_redeem.Redeem).extend({
  customMethod: function customMethod() {
    // TODO add custom implementation
    return;
  }
});
var _default = exports["default"] = RedeemRepository;