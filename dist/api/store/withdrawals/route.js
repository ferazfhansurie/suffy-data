"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// list withdrawals
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var withdrawalService, selector, config, withdrawals;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Resolve the WithdrawalService from the request's scope
          withdrawalService = req.scope.resolve("withdrawalService"); // Optionally, you can pass selectors and configuration, e.g., for pagination
          selector = {}; // Define your selector here, if needed
          config = {
            skip: 0,
            take: 20,
            // You can adjust pagination settings here
            relations: [] // Include any relations if needed
          }; // Retrieve all withdrawals
          _context.next = 6;
          return withdrawalService.list(selector, config);
        case 6:
          withdrawals = _context.sent;
          // Respond with the retrieved withdrawals
          res.status(200).json(withdrawals);
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

// create a withdrawal
var POST = exports.POST = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var withdrawalService, post;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          withdrawalService = req.scope.resolve("withdrawalService"); // basic validation of request body
          if (!(!req.body.total || !req.body.customer_id)) {
            _context2.next = 3;
            break;
          }
          throw new Error("`total` and `customer_id` are required.");
        case 3:
          _context2.next = 5;
          return withdrawalService.create(req.body);
        case 5:
          post = _context2.sent;
          res.json({
            post: post
          });
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function POST(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();