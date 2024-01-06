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
          if (loggedInUserId) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            error: 'Unauthorized'
          }));
        case 4:
          _context.prev = 4;
          _context.next = 7;
          return withdrawalService.listByCustomerPending({}, {}, loggedInUserId);
        case 7:
          withdrawals = _context.sent;
          res.status(200).json({
            withdrawals: withdrawals
          });
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          res.status(500).json({
            error: _context.t0.message
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();