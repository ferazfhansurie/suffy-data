"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _medusa = require("@medusajs/medusa");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CustomerService = exports["default"] = /*#__PURE__*/function (_MedusaCustomerServic) {
  (0, _inherits2["default"])(CustomerService, _MedusaCustomerServic);
  var _super = _createSuper(CustomerService);
  function CustomerService() {
    (0, _classCallCheck2["default"])(this, CustomerService);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(CustomerService, [{
    key: "makeLoyaltyPoints",
    value: function () {
      var _makeLoyaltyPoints = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(customerId, points) {
        var customer, updatedCustomer;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.retrieve(customerId);
            case 2:
              customer = _context.sent;
              customer.loyaltyPoints += points;

              // Save the updated customer to the database
              _context.next = 6;
              return this.customerRepository_.save(customer);
            case 6:
              updatedCustomer = _context.sent;
              return _context.abrupt("return", updatedCustomer);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function makeLoyaltyPoints(_x, _x2) {
        return _makeLoyaltyPoints.apply(this, arguments);
      }
      return makeLoyaltyPoints;
    }()
  }, {
    key: "makeReferralCode",
    value: function () {
      var _makeReferralCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(customerId) {
        var customer, referralCode, updatedCustomer;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.retrieve(customerId);
            case 2:
              customer = _context2.sent;
              // Check if the customer already has a referral code
              if (!customer.referralCode) {
                // Generate a unique referral code
                // This is a basic example. You may want to use a more complex or safer method
                referralCode = Math.random().toString(36).substr(2, 9).toUpperCase(); // Assign the generated referral code to the customer
                customer.referralCode = referralCode;
              }

              // You can implement any additional logic here, such as updating loyalty points

              // Save the updated customer to the database
              _context2.next = 6;
              return this.customerRepository_.save(customer);
            case 6:
              updatedCustomer = _context2.sent;
              return _context2.abrupt("return", updatedCustomer);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function makeReferralCode(_x3) {
        return _makeReferralCode.apply(this, arguments);
      }
      return makeReferralCode;
    }()
  }]);
  return CustomerService;
}(_medusa.CustomerService);