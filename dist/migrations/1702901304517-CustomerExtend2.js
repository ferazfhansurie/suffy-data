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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMjkwMTMwNDUxNy1DdXN0b21lckV4dGVuZDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlncmF0aW9ucy8xNzAyOTAxMzA0NTE3LUN1c3RvbWVyRXh0ZW5kMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLDRCQUE0QjtJQUU5QixLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3BDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsMEJBQTBCO1lBQzFCLGtDQUFrQztZQUNsQywrQkFBK0I7WUFDL0Isd0NBQXdDO1lBQ3hDLHNDQUFzQyxDQUN2QyxDQUFBO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDeEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQiwwQkFBMEI7WUFDMUIsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUM1QixxQ0FBcUM7WUFDckMsbUNBQW1DLENBQ3BDLENBQUE7SUFDSCxDQUFDO0NBRU47QUF0QkQsb0VBc0JDIn0=