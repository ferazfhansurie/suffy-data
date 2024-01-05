"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdate1703684045104 = void 0;
class CustomerUpdate1703684045104 {
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE \"customer\"" +
            " ADD COLUMN \"pendingFunds\" int");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE \"customer\"" +
            " DROP COLUMN \"pendingFunds\"");
    }
}
exports.CustomerUpdate1703684045104 = CustomerUpdate1703684045104;
