"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
async function fetchReferrals(customerService, referralCode) {
    const customers = await customerService.list({});
    return customers.filter(customer => { var _a; return ((_a = customer.metadata) === null || _a === void 0 ? void 0 : _a.referrer) === referralCode; });
}
const GET = async (req, res) => {
    var _a;
    try {
        const customerService = req.scope.resolve("customerService");
        const loggedInUserId = req.user.customer_id;
        if (!loggedInUserId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const loggedInUser = await customerService.retrieve(loggedInUserId);
        const loggedInUserReferralCode = (_a = loggedInUser.metadata) === null || _a === void 0 ? void 0 : _a.referral_code;
        if (!loggedInUserReferralCode) {
            return res.status(404).json({ error: 'Referral code not found' });
        }
        // Recursive function to build the referral tree
        async function buildReferralTree(referralCode) {
            var _a;
            const referrals = await fetchReferrals(customerService, referralCode);
            for (const ref of referrals) {
                ref.referrals = await buildReferralTree((_a = ref.metadata) === null || _a === void 0 ? void 0 : _a.referral_code);
            }
            return referrals;
        }
        const referralTree = await buildReferralTree(loggedInUserReferralCode);
        res.status(200).json(referralTree);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy1tZXRhZGF0YS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxLQUFLLFVBQVUsY0FBYyxDQUFDLGVBQWUsRUFBRSxZQUFZO0lBQ3pELE1BQU0sU0FBUyxHQUFHLE1BQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBQyxPQUFBLENBQUEsTUFBQSxRQUFRLENBQUMsUUFBUSwwQ0FBRSxRQUFRLE1BQUssWUFBWSxDQUFBLEVBQUEsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFFTSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7O0lBQ25FLElBQUk7UUFDRixNQUFNLGVBQWUsR0FBb0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RSxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUU1QyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RDtRQUVELE1BQU0sWUFBWSxHQUFHLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRSxNQUFNLHdCQUF3QixHQUFHLE1BQUEsWUFBWSxDQUFDLFFBQVEsMENBQUUsYUFBYSxDQUFDO1FBRXRFLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUM3QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUVELGdEQUFnRDtRQUNoRCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsWUFBWTs7WUFDM0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxjQUFjLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RFLEtBQUssTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUMzQixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0saUJBQWlCLENBQUMsTUFBQSxHQUFHLENBQUMsUUFBUSwwQ0FBRSxhQUFhLENBQUMsQ0FBQzthQUN0RTtZQUNELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCxNQUFNLFlBQVksR0FBRyxNQUFNLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDO0FBOUJXLFFBQUEsR0FBRyxPQThCZCJ9