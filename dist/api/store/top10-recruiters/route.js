"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _medusa = require("@medusajs/medusa");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var GET = exports.GET = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var manager, customerRepository, allCustomers, referralCounts, _iterator, _step, _customer$metadata3, customer, referralCode, recruitCount, updatedCustomers, sortedCustomers, topCustomers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          manager = req.scope.resolve("manager");
          customerRepository = manager.getRepository(_medusa.Customer); // Fetch all customers
          _context.next = 5;
          return customerRepository.find({
            relations: ["billing_address"]
          });
        case 5:
          allCustomers = _context.sent;
          console.log(allCustomers);

          // Map to hold referralCode and count of how many times it's been referred
          referralCounts = new Map(); // Initialize counts for each referral code
          allCustomers.forEach(function (customer) {
            var _customer$metadata;
            var referralCode = (_customer$metadata = customer.metadata) === null || _customer$metadata === void 0 ? void 0 : _customer$metadata.referral_code;
            if (referralCode) {
              referralCounts.set(referralCode, 0);
            }
          });

          // Count referrals
          allCustomers.forEach(function (customer) {
            var _customer$metadata2;
            var referrerCode = (_customer$metadata2 = customer.metadata) === null || _customer$metadata2 === void 0 ? void 0 : _customer$metadata2.referrer;
            if (referrerCode && referralCounts.has(referrerCode)) {
              referralCounts.set(referrerCode, referralCounts.get(referrerCode) + 1);
            }
          });

          // Update 'recruits' attribute for each customer
          _iterator = _createForOfIteratorHelper(allCustomers);
          _context.prev = 11;
          _iterator.s();
        case 13:
          if ((_step = _iterator.n()).done) {
            _context.next = 23;
            break;
          }
          customer = _step.value;
          referralCode = (_customer$metadata3 = customer.metadata) === null || _customer$metadata3 === void 0 ? void 0 : _customer$metadata3.referral_code;
          if (!referralCode) {
            _context.next = 21;
            break;
          }
          recruitCount = referralCounts.get(referralCode) || 0;
          customer.recruits = recruitCount;
          _context.next = 21;
          return customerRepository.save(customer);
        case 21:
          _context.next = 13;
          break;
        case 23:
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](11);
          _iterator.e(_context.t0);
        case 28:
          _context.prev = 28;
          _iterator.f();
          return _context.finish(28);
        case 31:
          _context.next = 33;
          return customerRepository.find({
            relations: ["billing_address"]
          });
        case 33:
          updatedCustomers = _context.sent;
          sortedCustomers = updatedCustomers.sort(function (a, b) {
            return b.recruits - a.recruits; // For descending order
          });
          topCustomers = sortedCustomers.slice(0, 10);
          console.log(topCustomers);
          res.status(200).json(topCustomers);
          _context.next = 43;
          break;
        case 40:
          _context.prev = 40;
          _context.t1 = _context["catch"](0);
          res.status(500).json({
            error: _context.t1.message
          });
        case 43:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 40], [11, 25, 28, 31]]);
  }));
  return function GET(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();