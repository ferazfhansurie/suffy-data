"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const medusa_1 = require("@medusajs/medusa");
const GET = async (req, res) => {
    var _a;
    try {
        const manager = req.scope.resolve("manager");
        const customerRepository = manager.getRepository(medusa_1.Customer);
        // Fetch all customers
        const allCustomers = await customerRepository.find({
            relations: ["billing_address"],
        });
        console.log(allCustomers);
        // Map to hold referralCode and count of how many times it's been referred
        const referralCounts = new Map();
        // Initialize counts for each referral code
        allCustomers.forEach(customer => {
            var _a;
            const referralCode = (_a = customer.metadata) === null || _a === void 0 ? void 0 : _a.referral_code;
            if (referralCode) {
                referralCounts.set(referralCode, 0);
            }
        });
        // Count referrals
        allCustomers.forEach(customer => {
            var _a;
            const referrerCode = (_a = customer.metadata) === null || _a === void 0 ? void 0 : _a.referrer;
            if (referrerCode && referralCounts.has(referrerCode)) {
                referralCounts.set(referrerCode, referralCounts.get(referrerCode) + 1);
            }
        });
        // Update 'recruits' attribute for each customer
        for (const customer of allCustomers) {
            const referralCode = (_a = customer.metadata) === null || _a === void 0 ? void 0 : _a.referral_code;
            if (referralCode) {
                const recruitCount = referralCounts.get(referralCode) || 0;
                customer.recruits = recruitCount;
                await customerRepository.save(customer);
            }
        }
        // Optionally, refetch updated customers if needed
        const updatedCustomers = await customerRepository.find({ relations: ["billing_address"], });
        const sortedCustomers = updatedCustomers.sort((a, b) => {
            return b.recruits - a.recruits; // For descending order
        });
        const topCustomers = sortedCustomers.slice(0, 10);
        console.log(topCustomers);
        res.status(200).json(topCustomers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3RvcDEwLXJlY3J1aXRlcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNkNBQTRDO0FBRXJDLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTs7SUFDbkUsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFrQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxNQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQVEsQ0FBQyxDQUFDO1FBRTNELHNCQUFzQjtRQUN0QixNQUFNLFlBQVksR0FBRyxNQUFNLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXpCLDBFQUEwRTtRQUMxRSxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWpDLDJDQUEyQztRQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFOztZQUM5QixNQUFNLFlBQVksR0FBRyxNQUFBLFFBQVEsQ0FBQyxRQUFRLDBDQUFFLGFBQWEsQ0FBQztZQUN0RCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFrQjtRQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFOztZQUM5QixNQUFNLFlBQVksR0FBRyxNQUFBLFFBQVEsQ0FBQyxRQUFRLDBDQUFFLFFBQVEsQ0FBQztZQUNqRCxJQUFJLFlBQVksSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNwRCxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxnREFBZ0Q7UUFDaEQsS0FBSyxNQUFNLFFBQVEsSUFBSSxZQUFZLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsTUFBQSxRQUFRLENBQUMsUUFBUSwwQ0FBRSxhQUFhLENBQUM7WUFDdEQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE1BQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQTtnQkFDaEMsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7U0FDRjtRQUVELGtEQUFrRDtRQUNsRCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxDQUNwRCxFQUFDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUUsQ0FDbEMsQ0FBQztRQUNGLE1BQU0sZUFBZSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxPQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QjtRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDO0FBdkRXLFFBQUEsR0FBRyxPQXVEZCJ9