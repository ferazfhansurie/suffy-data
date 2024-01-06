"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var OrderPlacedSubscriber = /*#__PURE__*/(0, _createClass2["default"])(function OrderPlacedSubscriber(_ref) {
  var _this = this;
  var eventBusService = _ref.eventBusService,
    orderService = _ref.orderService;
  (0, _classCallCheck2["default"])(this, OrderPlacedSubscriber);
  (0, _defineProperty2["default"])(this, "handleOrder", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(order) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(order.id);
            _context.next = 3;
            return _this.orderService.calculateLoyaltyPoints(order.id);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  this.orderService = orderService;
  eventBusService.subscribe("order.placed", this.handleOrder);
});
var _default = exports["default"] = OrderPlacedSubscriber;