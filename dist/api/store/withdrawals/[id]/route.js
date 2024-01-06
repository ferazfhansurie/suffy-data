"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = exports.GET = exports.DELETE = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// retrieve a post by its ID
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var withdrawalService, post;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          withdrawalService = req.scope.resolve("withdrawalService");
          _context.next = 3;
          return withdrawalService.retrieve(req.params.id);
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

// update a post by its ID
var POST = exports.POST = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var withdrawalService, post;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          withdrawalService = req.scope.resolve("withdrawalService"); // basic validation of request body
          if (!req.body.id) {
            _context2.next = 3;
            break;
          }
          throw new Error("Can't update post ID");
        case 3:
          _context2.next = 5;
          return withdrawalService.update(req.params.id, req.body);
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

// delete a post by its ID
var DELETE = exports.DELETE = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var withdrawalService;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          withdrawalService = req.scope.resolve("withdrawalService");
          _context3.next = 3;
          return withdrawalService["delete"](req.params.id);
        case 3:
          res.status(200).end();
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function DELETE(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();