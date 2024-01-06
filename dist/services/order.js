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
var OrderService = exports["default"] = /*#__PURE__*/function (_MedusaOrderService) {
  (0, _inherits2["default"])(OrderService, _MedusaOrderService);
  var _super = _createSuper(OrderService);
  // async test(updatedCustomer): Promise<Item[]> {
  //   const custRepo = this.activeManager_.getRepository(
  //     Item
  //   )
  //   return await custRepo.
  // }

  function OrderService(container) {
    var _this;
    (0, _classCallCheck2["default"])(this, OrderService);
    _this = _super.call(this, container);
    _this.customerService = container.customerService;
    return _this;
  }
  (0, _createClass2["default"])(OrderService, [{
    key: "findRepo",
    value: function () {
      var _findRepo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(updatedCustomer) {
        var custRepo;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              custRepo = this.activeManager_.getRepository(_medusa.Customer);
              _context.next = 3;
              return custRepo.save(updatedCustomer);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function findRepo(_x) {
        return _findRepo.apply(this, arguments);
      }
      return findRepo;
    }()
  }, {
    key: "recursiveFunction",
    value: function () {
      var _recursiveFunction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(referrer, loyaltyPoints) {
        var _referrer$metadata;
        var referrerReferral, _referrer, referrerCust, referrerPoints;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              referrerReferral = (_referrer$metadata = referrer.metadata) === null || _referrer$metadata === void 0 ? void 0 : _referrer$metadata.referrer;
              if (!referrerReferral) {
                _context2.next = 13;
                break;
              }
              _referrer = "cus_01" + referrerReferral;
              _context2.next = 5;
              return this.customerService.retrieve(_referrer);
            case 5:
              referrerCust = _context2.sent;
              console.log(loyaltyPoints * 0.05);
              referrerPoints = Math.round(loyaltyPoints * 0.05 * 100);
              referrerCust.loyaltyPoints += referrerPoints;
              _context2.next = 11;
              return this.findRepo(referrerCust);
            case 11:
              _context2.next = 13;
              return this.recursiveFunction(referrerCust, loyaltyPoints);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function recursiveFunction(_x2, _x3) {
        return _recursiveFunction.apply(this, arguments);
      }
      return recursiveFunction;
    }()
  }, {
    key: "calculateLoyaltyPoints",
    value: function () {
      var _calculateLoyaltyPoints = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(orderId) {
        var _customer$metadata;
        var order, customer, referrerId, loyaltyPoints, referrer, referrercust, referrerPoints, totalQuantity, updatedOrder;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.retrieveWithTotals(orderId);
            case 2:
              order = _context3.sent;
              console.log(order.customer_id);
              _context3.next = 6;
              return this.customerService.retrieve(order.customer_id);
            case 6:
              customer = _context3.sent;
              console.log(customer);
              referrerId = (_customer$metadata = customer.metadata) === null || _customer$metadata === void 0 ? void 0 : _customer$metadata.referrer;
              console.log(String(referrerId));
              loyaltyPoints = order.total / 100;
              console.log(order.total);
              console.log(order.total);
              console.log(loyaltyPoints);
              if (!referrerId) {
                _context3.next = 29;
                break;
              }
              // Logic to handle the referrer
              // For example, update the referrer's loyalty points
              referrer = "cus_01" + customer.metadata.referrer;
              console.log(referrer);
              _context3.next = 19;
              return this.customerService.retrieve(referrer);
            case 19:
              referrercust = _context3.sent;
              console.log(referrercust);
              console.log(loyaltyPoints * 0.2);
              referrerPoints = Math.round(loyaltyPoints * 0.20 * 100);
              console.log(referrerPoints);
              referrercust.loyaltyPoints += referrerPoints;
              _context3.next = 27;
              return this.findRepo(referrercust);
            case 27:
              _context3.next = 29;
              return this.recursiveFunction(referrercust, loyaltyPoints);
            case 29:
              // Assuming order.cart.items is an array of items and each item has a 'quantity' property
              totalQuantity = order.items.reduce(function (total, item) {
                return total + item.quantity;
              }, 0); // Start with a total of 0
              customer.totalOrders += 1;
              console.log(totalQuantity);
              if (totalQuantity >= 10) {
                console.log(totalQuantity);
                customer.totalBulkPurchase = customer.totalBulkPurchase + Math.floor(totalQuantity / 10);
              }
              order.loyaltyPoints += loyaltyPoints;
              console.log(order);
              _context3.next = 37;
              return this.orderRepository_.save(order);
            case 37:
              updatedOrder = _context3.sent;
              _context3.next = 40;
              return this.findRepo(customer);
            case 40:
              console.log(updatedOrder);

              // Apply the loyalty points to the customer's account
              //   await this.customerService.makeLoyaltyPoints(order.customer_id, loyaltyPoints)
              return _context3.abrupt("return", updatedOrder);
            case 42:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function calculateLoyaltyPoints(_x4) {
        return _calculateLoyaltyPoints.apply(this, arguments);
      }
      return calculateLoyaltyPoints;
    }()
  }]);
  return OrderService;
}(_medusa.OrderService);