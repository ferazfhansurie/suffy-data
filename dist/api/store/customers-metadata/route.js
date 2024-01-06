"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Backend route adjustment
function fetchReferrals(_x, _x2) {
  return _fetchReferrals.apply(this, arguments);
}
function _fetchReferrals() {
  _fetchReferrals = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(customerService, referralCode) {
    var customers;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return customerService.list({});
        case 2:
          customers = _context3.sent;
          return _context3.abrupt("return", customers.filter(function (customer) {
            var _customer$metadata;
            return ((_customer$metadata = customer.metadata) === null || _customer$metadata === void 0 ? void 0 : _customer$metadata.referrer) === referralCode;
          }));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchReferrals.apply(this, arguments);
}
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _loggedInUser$metadat, buildReferralTree, customerService, loggedInUserId, loggedInUser, loggedInUserReferralCode, referralTree;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // Recursive function to build the referral tree
          buildReferralTree = /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(referralCode) {
              var referrals, _iterator, _step, _ref$metadata, ref;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetchReferrals(customerService, referralCode);
                  case 2:
                    referrals = _context.sent;
                    _iterator = _createForOfIteratorHelper(referrals);
                    _context.prev = 4;
                    _iterator.s();
                  case 6:
                    if ((_step = _iterator.n()).done) {
                      _context.next = 13;
                      break;
                    }
                    ref = _step.value;
                    _context.next = 10;
                    return buildReferralTree((_ref$metadata = ref.metadata) === null || _ref$metadata === void 0 ? void 0 : _ref$metadata.referral_code);
                  case 10:
                    ref.referrals = _context.sent;
                  case 11:
                    _context.next = 6;
                    break;
                  case 13:
                    _context.next = 18;
                    break;
                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](4);
                    _iterator.e(_context.t0);
                  case 18:
                    _context.prev = 18;
                    _iterator.f();
                    return _context.finish(18);
                  case 21:
                    return _context.abrupt("return", referrals);
                  case 22:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[4, 15, 18, 21]]);
            }));
            return function buildReferralTree(_x5) {
              return _ref2.apply(this, arguments);
            };
          }();
          customerService = req.scope.resolve("customerService");
          loggedInUserId = req.user.customer_id;
          if (loggedInUserId) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            error: 'Unauthorized'
          }));
        case 6:
          _context2.next = 8;
          return customerService.retrieve(loggedInUserId);
        case 8:
          loggedInUser = _context2.sent;
          loggedInUserReferralCode = (_loggedInUser$metadat = loggedInUser.metadata) === null || _loggedInUser$metadat === void 0 ? void 0 : _loggedInUser$metadat.referral_code;
          if (loggedInUserReferralCode) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            error: 'Referral code not found'
          }));
        case 12:
          _context2.next = 14;
          return buildReferralTree(loggedInUserReferralCode);
        case 14:
          referralTree = _context2.sent;
          res.status(200).json(referralTree);
          _context2.next = 21;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function GET(_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();