"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithdrawalCreate1702737731531 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var WithdrawalCreate1702737731531 = exports.WithdrawalCreate1702737731531 = /*#__PURE__*/function () {
  function WithdrawalCreate1702737731531() {
    (0, _classCallCheck2["default"])(this, WithdrawalCreate1702737731531);
  }
  (0, _createClass2["default"])(WithdrawalCreate1702737731531, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryRunner.query("CREATE TABLE \"withdrawal\" (\"id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"total\" character varying NOT NULL, \"status\" character varying NOT NULL, \"reason\" character varying,\"customer_id\" character varying, CONSTRAINT \"PK_be5fda3aac270b134ff9c21cdee\" PRIMARY KEY (\"id\"))");
            case 2:
              _context.next = 4;
              return queryRunner.query("ALTER TABLE \"withdrawal\" ADD CONSTRAINT \"FK_c6fb082a3114f35d0cc27c518e0\" FOREIGN KEY (\"customer_id\") REFERENCES \"customer\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
            case 4:
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
              return queryRunner.query("ALTER TABLE \"withdrawal\" DROP CONSTRAINT \"FK_c6fb082a3114f35d0cc27c518e0\"");
            case 2:
              _context2.next = 4;
              return queryRunner.query("DROP TABLE \"withdrawal\"");
            case 4:
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
  return WithdrawalCreate1702737731531;
}();