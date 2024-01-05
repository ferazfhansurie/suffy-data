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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMjMwNTY4NzU4OS1DdXN0b21lckV4dGVuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE3MDIzMDU2ODc1ODktQ3VzdG9tZXJFeHRlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSwyQkFBMkI7SUFFN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUNwQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLDBCQUEwQjtZQUMxQixvQ0FBb0M7WUFDcEMsdUNBQXVDO1lBQ3ZDLHdDQUF3QztZQUN4QyxrQ0FBa0MsQ0FDbkMsQ0FBQTtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3hDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyxnQ0FBZ0M7WUFDaEMsaUNBQWlDO1lBQ2pDLDJCQUEyQixDQUM1QixDQUFBO0lBQ0gsQ0FBQztDQUVOO0FBdEJELGtFQXNCQyJ9