"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// list withdrawals
const GET = async (req, res) => {
    try {
        // Resolve the WithdrawalService from the request's scope
        const rewardsService = req.scope.resolve("rewardsService");
        // Optionally, you can pass selectors and configuration, e.g., for pagination
        const selector = {}; // Define your selector here, if needed
        const config = {
            skip: 0,
            take: 20,
            relations: [] // Include any relations if needed
        };
        // Retrieve all withdrawals
        const rewards = await rewardsService.list(selector, config);
        // Respond with the retrieved withdrawals
        res.status(200).json(rewards);
    }
    catch (error) {
        // Handle any errors
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
