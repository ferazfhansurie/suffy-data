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
            return b.loyaltyPoints - a.loyaltyPoints; // For descending order
        });
        const topCustomers = sortedCustomers.slice(0, 10);
        res.status(200).json(topCustomers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3RvcDEwLWVhcm5lcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsNkNBQTRDO0FBSXJDLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0YsTUFBTSxlQUFlLEdBQW9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUUsTUFBTSxPQUFPLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBUSxDQUFDLENBQUM7UUFFM0Qsc0JBQXNCO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUVILHdEQUF3RDtRQUN4RCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsdUJBQXVCO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDO0FBckJXLFFBQUEsR0FBRyxPQXFCZCJ9