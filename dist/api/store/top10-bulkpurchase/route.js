"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const medusa_1 = require("@medusajs/medusa");
const GET = async (req, res) => {
    try {
        const customerService = req.scope.resolve("customerService");
        const manager = req.scope.resolve("manager");
        const customerRepository = manager.getRepository(medusa_1.Customer);
        // Fetch all customers
        const customers = await customerRepository.find({
            relations: ["billing_address"],
        });
        // Sort customers by 'loyaltyPoints' in descending order
        const sortedCustomers = customers.sort((a, b) => {
            return b.totalBulkPurchase - a.totalBulkPurchase; // For descending order
        });
        const topCustomers = sortedCustomers.slice(0, 10);
        res.status(200).json(topCustomers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3RvcDEwLWJ1bGtwdXJjaGFzZS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSw2Q0FBNEM7QUFDckMsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLElBQUk7UUFDRixNQUFNLGVBQWUsR0FBb0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RSxNQUFNLE9BQU8sR0FBa0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFRLENBQUMsQ0FBQztRQUMzRCxzQkFBc0I7UUFDdEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDL0IsQ0FBQyxDQUFDO1FBRUgsd0RBQXdEO1FBQ3hELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsdUJBQXVCO1FBQzNFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDO0FBcEJXLFFBQUEsR0FBRyxPQW9CZCJ9