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
