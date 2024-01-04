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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMzY4NDA0NTEwNC1DdXN0b21lclVwZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE3MDM2ODQwNDUxMDQtQ3VzdG9tZXJVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSwyQkFBMkI7SUFFN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUNwQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCO1lBQ2xELGtDQUFrQyxDQUNqQyxDQUFBO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDBCQUEwQjtZQUNoRCwrQkFBK0IsQ0FDaEMsQ0FBQTtJQUNMLENBQUM7Q0FFSjtBQWRELGtFQWNDIn0=