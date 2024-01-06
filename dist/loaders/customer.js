"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != (0, _typeof2["default"])(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _default() {
  return _ref.apply(this, arguments);
}
function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var imports;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("@medusajs/medusa/dist/api/routes/store/customers/index"));
          });
        case 2:
          imports = _context.sent;
          imports.allowedStoreCustomersFields = [].concat((0, _toConsumableArray2["default"])(imports.allowedStoreCustomersFields), ["loyaltyPoints", "totalOrders", "pendingFunds"]);
          imports.defaultStoreCustomersFields = [].concat((0, _toConsumableArray2["default"])(imports.defaultStoreCustomersFields), ["loyaltyPoints", "totalOrders", "pendingFunds"]);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}