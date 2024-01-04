"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalRepository = void 0;
const withdrawal_1 = require("../models/withdrawal");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.WithdrawalRepository = database_1.dataSource
    .getRepository(withdrawal_1.Withdrawal)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.WithdrawalRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvd2l0aGRyYXdhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUQ7QUFDakQscUVBRStDO0FBRWxDLFFBQUEsb0JBQW9CLEdBQUcscUJBQVU7S0FDM0MsYUFBYSxDQUFDLHVCQUFVLENBQUM7S0FDekIsTUFBTSxDQUFDO0lBQ04sWUFBWTtRQUNWLGlDQUFpQztRQUNqQyxPQUFNO0lBQ1IsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLDRCQUFvQixDQUFBIn0=