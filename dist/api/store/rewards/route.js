"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// list withdrawals
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rewardsService, selector, config, rewards;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Resolve the WithdrawalService from the request's scope
          rewardsService = req.scope.resolve("rewardsService"); // Optionally, you can pass selectors and configuration, e.g., for pagination
          selector = {}; // Define your selector here, if needed
          config = {
            skip: 0,
            take: 20,
            // You can adjust pagination settings here
            relations: [] // Include any relations if needed
          }; // Retrieve all withdrawals
          _context.next = 6;
          return rewardsService.list(selector, config);
        case 6:
          rewards = _context.sent;
          // Respond with the retrieved withdrawals
          res.status(200).json(rewards);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // Handle any errors
          res.status(500).json({
            error: _context.t0.message
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();