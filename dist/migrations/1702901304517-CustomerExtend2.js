"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerExtend21702901304517 = void 0;
class CustomerExtend21702901304517 {
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE \"customer\"" +
            " ADD COLUMN \"totalOrders\" int," +
            " ADD COLUMN \"recruits\" int," +
            " ADD COLUMN \"totalBulkPurchase\" int," +
            " ADD COLUMN \"totalProfitShare\" int");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE \"customer\"" +
            " DROP COLUMN \"totalOrders\"," +
            " DROP COLUMN \"recruits\"," +
            " DROP COLUMN \"totalBulkPurchase\"," +
            " DROP COLUMN \"totalProfitShare\"");
    }
}
exports.CustomerExtend21702901304517 = CustomerExtend21702901304517;
