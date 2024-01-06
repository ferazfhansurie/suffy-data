"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prepareRegions;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function prepareRegions(_x) {
  return _prepareRegions.apply(this, arguments);
}
function _prepareRegions() {
  _prepareRegions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client) {
    var _yield$client$admin$r, regions, _yield$client$admin$s, store;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return client.admin.regions.list();
        case 2:
          _yield$client$admin$r = _context.sent;
          regions = _yield$client$admin$r.regions;
          if (regions.length) {
            _context.next = 17;
            break;
          }
          _context.next = 7;
          return client.admin.store.retrieve();
        case 7:
          _yield$client$admin$s = _context.sent;
          store = _yield$client$admin$s.store;
          if (store.currencies) {
            _context.next = 13;
            break;
          }
          _context.next = 12;
          return client.admin.store.update({
            currencies: ["eur"]
          });
        case 12:
          store = _context.sent.store;
        case 13:
          _context.next = 15;
          return client.admin.regions.create(getSampleRegion(store));
        case 15:
          _context.t0 = _context.sent.region;
          regions = [_context.t0];
        case 17:
          return _context.abrupt("return", regions);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _prepareRegions.apply(this, arguments);
}
function getSampleRegion(store) {
  return {
    name: "EU",
    currency_code: store.currencies[0].code,
    tax_rate: 0,
    payment_providers: ["manual"],
    fulfillment_providers: ["manual"],
    countries: ["gb", "de", "dk", "se", "fr", "es", "it"]
  };
}