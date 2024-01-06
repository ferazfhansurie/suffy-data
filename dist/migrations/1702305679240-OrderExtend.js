"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderExtend1702305679240 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var OrderExtend1702305679240 = exports.OrderExtend1702305679240 = /*#__PURE__*/function () {
  function OrderExtend1702305679240() {
    (0, _classCallCheck2["default"])(this, OrderExtend1702305679240);
  }
  (0, _createClass2["default"])(OrderExtend1702305679240, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryRunner.query("ALTER TABLE \"order\"" + " ADD COLUMN \"loyaltyPoints\" int," + " ADD COLUMN \"referrer\" varchar");
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function up(_x) {
        return _up.apply(this, arguments);
      }
      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryRunner.query("ALTER TABLE \"order\" DROP COLUMN \"loyaltyPoints\"," + "ALTER TABLE \"order\" DROP COLUMN \"referrer\"");
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function down(_x2) {
        return _down.apply(this, arguments);
      }
      return down;
    }()
  }]);
  return OrderExtend1702305679240;
}();