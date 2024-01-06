"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// src/api/update-customer-loyalty-points.js

var POST = exports.POST = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, customerId, pointsToDeduct, operation, customerService, customer, updatedLoyaltyPoints, _updatedLoyaltyPoints;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, customerId = _req$body.customerId, pointsToDeduct = _req$body.pointsToDeduct, operation = _req$body.operation;
          customerService = req.scope.resolve("customerService");
          _context.next = 5;
          return customerService.retrieve(customerId);
        case 5:
          customer = _context.sent;
          if (customer) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            error: 'Customer not found'
          }));
        case 8:
          if (operation == "add") {
            // Update customer's LoyaltyPoints
            updatedLoyaltyPoints = customer.pendingFunds + pointsToDeduct; // Ensure it doesn't go below 0
            //await customerService.update(customerId, { pendingFunds: updatedLoyaltyPoints });
          } else if (operation == "subtract") {
            _updatedLoyaltyPoints = Math.max(customer.pendingFunds - pointsToDeduct, 0); // Ensure it doesn't go below 0
            //await customerService.update(customerId, { pendingFunds: updatedLoyaltyPoints });
          }
          res.status(200).json({
            message: 'Customer updated successfully'
          });
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function POST(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();