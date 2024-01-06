"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _medusa = require("@medusajs/medusa");
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var customerService, manager, customerRepository, customers, sortedCustomers, topCustomers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          customerService = req.scope.resolve("customerService");
          manager = req.scope.resolve("manager");
          customerRepository = manager.getRepository(_medusa.Customer); // Fetch all customers
          _context.next = 6;
          return customerRepository.find({
            relations: ["billing_address"]
          });
        case 6:
          customers = _context.sent;
          // Sort customers by 'loyaltyPoints' in descending order
          sortedCustomers = customers.sort(function (a, b) {
            return b.loyaltyPoints - a.loyaltyPoints; // For descending order
          });
          topCustomers = sortedCustomers.slice(0, 10);
          res.status(200).json(topCustomers);
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
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();