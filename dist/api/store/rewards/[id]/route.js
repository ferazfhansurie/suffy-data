"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// retrieve a post by its ID
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rewardsService, post;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rewardsService = req.scope.resolve("rewardsService");
          _context.next = 3;
          return rewardsService.retrieve(req.params.id);
        case 3:
          post = _context.sent;
          res.json({
            post: post
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();