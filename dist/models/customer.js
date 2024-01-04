"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const withdrawal_1 = require("./withdrawal");
const redeem_1 = require("./redeem");
const medusa_1 = require("@medusajs/medusa");
let Customer = class Customer extends medusa_1.Customer {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "loyaltyPoints", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "referralInput", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Customer.prototype, "referrer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "totalOrders", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "recruits", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "totalBulkPurchase", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "totalProfitShare", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "pendingFunds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => withdrawal_1.Withdrawal, (withdrawal) => withdrawal.customer),
    __metadata("design:type", Array)
], Customer.prototype, "withdrawals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => redeem_1.Redeem, (redeem) => redeem.customer),
    __metadata("design:type", Array)
], Customer.prototype, "redeem", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2N1c3RvbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUtrQjtBQUVoQiw2Q0FBeUM7QUFDM0MscUNBQWlDO0FBQ2pDLDZDQUd5QjtBQUdsQixJQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVMsU0FBUSxpQkFBYztDQXlCM0MsQ0FBQTtBQXhCQTtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7K0NBQ1k7QUFDckI7SUFBQyxJQUFBLGdCQUFNLEdBQUU7OEJBQ0ssTUFBTTs4Q0FBQTtBQUNwQjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs4QkFDTSxNQUFNOytDQUFBO0FBQ3JCO0lBQUMsSUFBQSxnQkFBTSxHQUFFOzhCQUNDLE1BQU07MENBQUE7QUFDaEI7SUFBQyxJQUFBLGdCQUFNLEdBQUU7OzZDQUNVO0FBQ25CO0lBQUMsSUFBQSxnQkFBTSxHQUFFOzswQ0FDTztBQUNoQjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7bURBQ2dCO0FBQ3pCO0lBQUMsSUFBQSxnQkFBTSxHQUFFOztrREFDZTtBQUN4QjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7OENBQ1c7QUFFcEI7SUFBQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7NkNBQ3ZDO0FBRXpCO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGVBQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7d0NBQ3JDO0FBeEJMLFFBQVE7SUFEcEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksUUFBUSxDQXlCcEI7QUF6QlksNEJBQVEifQ==