"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerExtend1702305687589 = void 0;
class CustomerExtend1702305687589 {
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE \"customer\"" +
            " ADD COLUMN \"loyaltyPoints\" int," +
            " ADD COLUMN \"referralCode\" varchar," +
            " ADD COLUMN \"referralInput\" varchar," +
            " ADD COLUMN \"referrer\" varchar");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE \"customer\"" +
            " DROP COLUMN \"loyaltyPoints\"," +
            " DROP COLUMN \"referralCode\"," +
            " DROP COLUMN \"referralInput\"," +
            " DROP COLUMN \"referrer\"");
    }
}
exports.CustomerExtend1702305687589 = CustomerExtend1702305687589;
