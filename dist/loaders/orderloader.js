"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1() {
    const imports = (await Promise.resolve().then(() => __importStar(require("@medusajs/medusa/dist/api/routes/store/orders/index"))));
    imports.allowedStoreOrdersFields = [
        ...imports.allowedStoreOrdersFields,
        "loyaltyPoints",
    ];
    imports.defaultStoreOrdersFields = [
        ...imports.defaultStoreOrdersFields,
        "loyaltyPoints",
    ];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJsb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9hZGVycy9vcmRlcmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsS0FBSztJQUNoQixNQUFNLE9BQU8sR0FBRyxDQUFDLHdEQUNmLHFEQUFxRCxHQUN0RCxDQUFRLENBQUE7SUFDVCxPQUFPLENBQUMsd0JBQXdCLEdBQUc7UUFDakMsR0FBRyxPQUFPLENBQUMsd0JBQXdCO1FBQ25DLGVBQWU7S0FDaEIsQ0FBQTtJQUNELE9BQU8sQ0FBQyx3QkFBd0IsR0FBRztRQUNqQyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0I7UUFDbkMsZUFBZTtLQUNoQixDQUFBO0FBQ0gsQ0FBQztBQVpILDRCQVlHIn0=