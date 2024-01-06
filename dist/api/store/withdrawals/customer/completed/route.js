"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// Example route to list withdrawals for the logged-in user
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var withdrawalService, loggedInUserId, withdrawals;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          withdrawalService = req.scope.resolve("withdrawalService");
          loggedInUserId = req.user.customer_id; // Assuming you have a way to get the logged-in user's ID
          _context.prev = 2;
          _context.next = 5;
          return withdrawalService.listByCustomerCompleted({}, {}, loggedInUserId);
        case 5:
          withdrawals = _context.sent;
          res.status(200).json({
            withdrawals: withdrawals
          });
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            error: _context.t0.message
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9]]);
  }));
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();