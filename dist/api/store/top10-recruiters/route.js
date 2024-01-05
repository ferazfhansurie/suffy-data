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
