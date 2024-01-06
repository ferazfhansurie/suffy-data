"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nestedForm = nestedForm;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _lodash = require("lodash");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Utility function to create a nested form. This is useful when you want to use a reusable form component within a form.
 * This is especially useful when you want to use a reusable form component within a form multiple times. For example, an form
 * that contains both a billing and a shipping address.
 * @example
 * const MyForm = () => {
 *   const form = useForm<{ email: string, shipping_address: AddressPayload, billing_address: AddressPayload }>()
 *
 *   return (
 *     <div>
 *       <Input {...form.register("email")} label="email" />
 *       <AddressForm form={nestedForm(form, "shipping_address")} />
 *       <AddressForm form={nestedForm(form, "billing_address")} />
 *     </div>
 *   )
 * }
 *
 * type AddressFormProps = {
 *   form: NestedForm<AddressPayload>
 * }
 *
 * const AddressForm = ({ form }: AddressFormProps) => {
 *   const { register, path } = form
 *
 *   return (
 *     <div>
 *       <Input {...register(path("city"))} label="City" /> // path("city") resolves as "shipping_address.city" or "billing_address.city" depending on the second argument passed to nestedForm
 *       <Input {...register(path("postal_code"))} label="Postal Code" />
 *     </div>
 *   )
 * }
 */

function nestedForm(form, path) {
  return _objectSpread(_objectSpread({}, form), {}, {
    path: function (_path) {
      function path(_x) {
        return _path.apply(this, arguments);
      }
      path.toString = function () {
        return _path.toString();
      };
      return path;
    }(function (field) {
      var fullPath = path && field ? "".concat(path, ".").concat(field) : path ? path : field;
      if ("path" in form) {
        return form.path(path);
      }
      return fullPath || "";
    }),
    get: function get(obj, field) {
      var fullPath = path && field ? "".concat(path, ".").concat(field) : path ? path : field;
      if ("get" in form) {
        return form.get(path);
      }
      return fullPath ? (0, _lodash.get)(obj, fullPath) : obj;
    }
  });
}