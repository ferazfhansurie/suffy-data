"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redeem = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _typeorm = require("typeorm");
var _medusa = require("@medusajs/medusa");
var _utils = require("@medusajs/medusa/dist/utils");
var _rewards = require("./rewards");
var _customer = require("./customer");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Redeem = exports.Redeem = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.Column)({
  type: "varchar"
}), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)({
  type: "varchar"
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)({
  type: "varchar"
}), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.ManyToOne)(function () {
  return _customer.Customer;
}, function (customer) {
  return customer.redeem;
}), _dec9 = (0, _typeorm.JoinColumn)({
  name: "customer_id"
}), _dec10 = Reflect.metadata("design:type", typeof _customer.Customer === "undefined" ? Object : _customer.Customer), _dec11 = (0, _typeorm.ManyToOne)(function () {
  return _rewards.Rewards;
}, function (rewards) {
  return rewards.redeem;
}), _dec12 = (0, _typeorm.JoinColumn)({
  name: "rewards_id"
}), _dec13 = Reflect.metadata("design:type", typeof _rewards.Rewards === "undefined" ? Object : _rewards.Rewards), _dec14 = (0, _typeorm.BeforeInsert)(), _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2["default"])(Redeem, _BaseEntity);
  var _super = _createSuper(Redeem);
  function Redeem() {
    var _this;
    (0, _classCallCheck2["default"])(this, Redeem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "status", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "customer_id", _descriptor2, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rewards_id", _descriptor3, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "customer", _descriptor4, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rewards", _descriptor5, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(Redeem, [{
    key: "beforeInsert",
    value: function beforeInsert() {
      this.id = (0, _utils.generateEntityId)(this.id, "redeem");
    }
  }]);
  return Redeem;
}(_medusa.BaseEntity), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "status", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "customer_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "rewards_id", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "customer", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "rewards", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "beforeInsert", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "beforeInsert"), _class2.prototype)), _class2)) || _class);