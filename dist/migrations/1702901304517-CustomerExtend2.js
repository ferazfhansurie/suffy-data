"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerExtend21702901304517 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var CustomerExtend21702901304517 = exports.CustomerExtend21702901304517 = /*#__PURE__*/function () {
  function CustomerExtend21702901304517() {
    (0, _classCallCheck2["default"])(this, CustomerExtend21702901304517);
  }
  (0, _createClass2["default"])(CustomerExtend21702901304517, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryRunner.query("ALTER TABLE \"customer\"" + " ADD COLUMN \"totalOrders\" int," + " ADD COLUMN \"recruits\" int," + " ADD COLUMN \"totalBulkPurchase\" int," + " ADD COLUMN \"totalProfitShare\" int");
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
              return queryRunner.query("ALTER TABLE \"customer\"" + " DROP COLUMN \"totalOrders\"," + " DROP COLUMN \"recruits\"," + " DROP COLUMN \"totalBulkPurchase\"," + " DROP COLUMN \"totalProfitShare\"");
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
  return CustomerExtend21702901304517;
}();