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
exports.Redeem = void 0;
const typeorm_1 = require("typeorm");
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/medusa/dist/utils");
const rewards_1 = require("./rewards");
const customer_1 = require("./customer");
let Redeem = class Redeem extends medusa_1.BaseEntity {
    beforeInsert() {
        this.id = (0, utils_1.generateEntityId)(this.id, "redeem");
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Redeem.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Redeem.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Redeem.prototype, "rewards_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_1.Customer, (customer) => customer.redeem),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_1.Customer)
], Redeem.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rewards_1.Rewards, (rewards) => rewards.redeem),
    (0, typeorm_1.JoinColumn)({ name: "rewards_id" }),
    __metadata("design:type", rewards_1.Rewards)
], Redeem.prototype, "rewards", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Redeem.prototype, "beforeInsert", null);
Redeem = __decorate([
    (0, typeorm_1.Entity)()
], Redeem);
exports.Redeem = Redeem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZWVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9yZWRlZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBTWtCO0FBQ2hCLDZDQUE2QztBQUM3Qyx1REFBOEQ7QUFDOUQsdUNBQW1DO0FBQ25DLHlDQUFxQztBQUc5QixJQUFNLE1BQU0sR0FBWixNQUFNLE1BQU8sU0FBUSxtQkFBVTtJQXdCNUIsWUFBWTtRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUEsd0JBQWdCLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQXpCQztJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7c0NBQ2Q7QUFFZDtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7MkNBQ1Q7QUFFbkI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7OzBDQUNWO0FBRWxCO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEQsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDOzhCQUMxQixtQkFBUTt3Q0FBQztBQUVuQjtJQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3JELElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQzs4QkFDMUIsaUJBQU87dUNBQUM7QUFNakI7SUFBQyxJQUFBLHNCQUFZLEdBQUU7Ozs7MENBR2Q7QUExQlUsTUFBTTtJQURsQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxNQUFNLENBMkJsQjtBQTNCWSx3QkFBTSJ9