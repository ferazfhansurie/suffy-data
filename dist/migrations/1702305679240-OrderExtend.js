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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMjMwNTY3OTI0MC1PcmRlckV4dGVuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE3MDIzMDU2NzkyNDAtT3JkZXJFeHRlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSx3QkFBd0I7SUFFMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUNwQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLHVCQUF1QjtZQUN2QixvQ0FBb0M7WUFDcEMsa0NBQWtDLENBRW5DLENBQUE7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN4QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLHNEQUFzRDtZQUN0RCxnREFBZ0QsQ0FDakQsQ0FBQTtJQUNILENBQUM7Q0FFTjtBQWxCRCw0REFrQkMifQ==