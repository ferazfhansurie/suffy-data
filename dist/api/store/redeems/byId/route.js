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
    var redeemService, loggedInUserId, config, redeems;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          redeemService = req.scope.resolve("redeemService");
          loggedInUserId = req.user.customer_id; // Assuming you have a way to get the logged-in user's ID
          config = {
            skip: 0,
            take: 20,
            // You can adjust pagination settings here
            relations: ["rewards"] // Include any relations if needed
          };
          _context.prev = 3;
          _context.next = 6;
          return redeemService.listById({}, config, loggedInUserId);
        case 6:
          redeems = _context.sent;
          res.status(200).json({
            redeems: redeems
          });
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          res.status(500).json({
            error: _context.t0.message
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 10]]);
  }));
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();