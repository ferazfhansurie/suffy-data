"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _medusa = require("@medusajs/medusa");
var _utils = require("@medusajs/utils");
var _typeorm = require("typeorm");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WithdrawalService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(WithdrawalService, _TransactionBaseServi);
  var _super = _createSuper(WithdrawalService);
  function WithdrawalService(container) {
    var _this;
    (0, _classCallCheck2["default"])(this, WithdrawalService);
    _this = _super.call(this, container);
    _this.withdrawalRepository_ = container.withdrawalRepository;
    return _this;
  }
  (0, _createClass2["default"])(WithdrawalService, [{
    key: "listAndCount",
    value: function () {
      var _listAndCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(selector) {
        var config,
          withdrawalRepo,
          query,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
                skip: 0,
                take: 20,
                relations: []
              };
              withdrawalRepo = this.activeManager_.withRepository(this.withdrawalRepository_);
              query = (0, _medusa.buildQuery)(selector, config);
              return _context.abrupt("return", withdrawalRepo.findAndCount(query));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function listAndCount(_x) {
        return _listAndCount.apply(this, arguments);
      }
      return listAndCount;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(selector) {
        var config,
          _yield$this$listAndCo,
          _yield$this$listAndCo2,
          withdrawals,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
                skip: 0,
                take: 20,
                relations: ["customer"]
              };
              _context2.next = 3;
              return this.listAndCount(selector, config);
            case 3:
              _yield$this$listAndCo = _context2.sent;
              _yield$this$listAndCo2 = (0, _slicedToArray2["default"])(_yield$this$listAndCo, 1);
              withdrawals = _yield$this$listAndCo2[0];
              return _context2.abrupt("return", withdrawals);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function list(_x2) {
        return _list.apply(this, arguments);
      }
      return list;
    }()
  }, {
    key: "retrieve",
    value: function () {
      var _retrieve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, config) {
        var withdrawalRepo, query, post;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              withdrawalRepo = this.activeManager_.withRepository(this.withdrawalRepository_);
              query = (0, _medusa.buildQuery)({
                id: id
              }, config);
              _context3.next = 4;
              return withdrawalRepo.findOne(query);
            case 4:
              post = _context3.sent;
              if (post) {
                _context3.next = 7;
                break;
              }
              throw new _utils.MedusaError(_utils.MedusaError.Types.NOT_FOUND, "Post was not found");
            case 7:
              return _context3.abrupt("return", post);
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function retrieve(_x3, _x4) {
        return _retrieve.apply(this, arguments);
      }
      return retrieve;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(manager) {
                  var withdrawalRepo, withdrawal, result;
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        withdrawalRepo = manager.withRepository(_this2.withdrawalRepository_);
                        withdrawal = withdrawalRepo.create();
                        withdrawal.total = data.total;
                        withdrawal.customer_id = data.customer_id;
                        withdrawal.status = "pending";
                        withdrawal.reason = data.reason;
                        _context4.next = 8;
                        return withdrawalRepo.save(withdrawal);
                      case 8:
                        result = _context4.sent;
                        return _context4.abrupt("return", result);
                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x6) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function create(_x5) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, data) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.atomicPhase_( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(manager) {
                  var withdrawalRepo, withdrawal;
                  return _regenerator["default"].wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        withdrawalRepo = manager.withRepository(_this3.withdrawalRepository_);
                        _context6.next = 3;
                        return _this3.retrieve(id);
                      case 3:
                        withdrawal = _context6.sent;
                        Object.assign(withdrawal, data);
                        _context6.next = 7;
                        return withdrawalRepo.save(withdrawal);
                      case 7:
                        return _context6.abrupt("return", _context6.sent);
                      case 8:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function (_x9) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 2:
              return _context7.abrupt("return", _context7.sent);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "listByCustomerPending",
    value: function () {
      var _listByCustomerPending = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var selector,
          config,
          customerId,
          _yield$this$listAndCo3,
          _yield$this$listAndCo4,
          withdrawals,
          _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              selector = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
              config = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {
                skip: 0,
                take: 20,
                relations: []
              };
              customerId = _args8.length > 2 ? _args8[2] : undefined;
              if (customerId) {
                selector.customer_id = customerId;
                selector.status = "pending";
              }
              _context8.next = 6;
              return this.listAndCount(selector, config);
            case 6:
              _yield$this$listAndCo3 = _context8.sent;
              _yield$this$listAndCo4 = (0, _slicedToArray2["default"])(_yield$this$listAndCo3, 1);
              withdrawals = _yield$this$listAndCo4[0];
              return _context8.abrupt("return", withdrawals);
            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function listByCustomerPending() {
        return _listByCustomerPending.apply(this, arguments);
      }
      return listByCustomerPending;
    }()
  }, {
    key: "listByCustomerCompleted",
    value: function () {
      var _listByCustomerCompleted = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var selector,
          config,
          customerId,
          _yield$this$listAndCo5,
          _yield$this$listAndCo6,
          withdrawals,
          _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              selector = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              config = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {
                skip: 0,
                take: 20,
                relations: []
              };
              customerId = _args9.length > 2 ? _args9[2] : undefined;
              if (customerId) {
                selector.customer_id = customerId;
                selector.status = (0, _typeorm.Not)("pending");
              }
              _context9.next = 6;
              return this.listAndCount(selector, config);
            case 6:
              _yield$this$listAndCo5 = _context9.sent;
              _yield$this$listAndCo6 = (0, _slicedToArray2["default"])(_yield$this$listAndCo5, 1);
              withdrawals = _yield$this$listAndCo6[0];
              return _context9.abrupt("return", withdrawals);
            case 10:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function listByCustomerCompleted() {
        return _listByCustomerCompleted.apply(this, arguments);
      }
      return listByCustomerCompleted;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id) {
        var _this4 = this;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.atomicPhase_( /*#__PURE__*/function () {
                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(manager) {
                  var withdrawalRepo, withdrawal;
                  return _regenerator["default"].wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        withdrawalRepo = manager.withRepository(_this4.withdrawalRepository_);
                        _context10.next = 3;
                        return _this4.retrieve(id);
                      case 3:
                        withdrawal = _context10.sent;
                        _context10.next = 6;
                        return withdrawalRepo.remove([withdrawal]);
                      case 6:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function (_x11) {
                  return _ref3.apply(this, arguments);
                };
              }());
            case 2:
              return _context11.abrupt("return", _context11.sent);
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function _delete(_x10) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
  return WithdrawalService;
}(_medusa.TransactionBaseService);
var _default = exports["default"] = WithdrawalService;