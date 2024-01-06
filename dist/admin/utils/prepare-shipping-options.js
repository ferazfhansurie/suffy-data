"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prepareShippingOptions;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function prepareShippingOptions(_x, _x2) {
  return _prepareShippingOptions.apply(this, arguments);
}
function _prepareShippingOptions() {
  _prepareShippingOptions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client, region) {
    var _yield$client$admin$s, shipping_options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return client.admin.shippingOptions.list();
        case 2:
          _yield$client$admin$s = _context.sent;
          shipping_options = _yield$client$admin$s.shipping_options;
          if (shipping_options.length) {
            _context.next = 9;
            break;
          }
          _context.next = 7;
          return client.admin.shippingOptions.create({
            "name": "PostFake Standard",
            "region_id": region.id,
            "provider_id": "manual",
            "data": {
              "id": "manual-fulfillment"
            },
            "price_type": "flat_rate",
            "amount": 1000
          });
        case 7:
          _context.t0 = _context.sent.shipping_option;
          shipping_options = [_context.t0];
        case 9:
          return _context.abrupt("return", shipping_options);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _prepareShippingOptions.apply(this, arguments);
}