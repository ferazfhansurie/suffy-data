"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExtend1702305679240 = void 0;
class OrderExtend1702305679240 {
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE \"order\"" +
            " ADD COLUMN \"loyaltyPoints\" int," +
            " ADD COLUMN \"referrer\" varchar");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE \"order\" DROP COLUMN \"loyaltyPoints\"," +
            "ALTER TABLE \"order\" DROP COLUMN \"referrer\"");
    }
}
exports.OrderExtend1702305679240 = OrderExtend1702305679240;
