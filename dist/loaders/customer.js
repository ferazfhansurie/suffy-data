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
    const imports = (await Promise.resolve().then(() => __importStar(require("@medusajs/medusa/dist/api/routes/store/customers/index"))));
    imports.allowedStoreCustomersFields = [
        ...imports.allowedStoreCustomersFields,
        "loyaltyPoints",
        "totalOrders",
        "pendingFunds",
    ];
    imports.defaultStoreCustomersFields = [
        ...imports.defaultStoreCustomersFields,
        "loyaltyPoints",
        "totalOrders",
        "pendingFunds",
    ];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbG9hZGVycy9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsS0FBSztJQUNoQixNQUFNLE9BQU8sR0FBRyxDQUFDLHdEQUNmLHdEQUF3RCxHQUN6RCxDQUFRLENBQUE7SUFDVCxPQUFPLENBQUMsMkJBQTJCLEdBQUc7UUFDcEMsR0FBRyxPQUFPLENBQUMsMkJBQTJCO1FBQ3RDLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztLQUNmLENBQUE7SUFDRCxPQUFPLENBQUMsMkJBQTJCLEdBQUc7UUFDcEMsR0FBRyxPQUFPLENBQUMsMkJBQTJCO1FBQ3RDLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztLQUVmLENBQUE7QUFDSCxDQUFDO0FBakJILDRCQWlCRyJ9