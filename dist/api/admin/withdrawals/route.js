"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
// list withdrawals
const GET = async (req, res) => {
    try {
        // Resolve the WithdrawalService from the request's scope
        const withdrawalService = req.scope.resolve("withdrawalService");
        // Optionally, you can pass selectors and configuration, e.g., for pagination
        const selector = {}; // Define your selector here, if needed
        const config = {
            skip: 0,
            take: 20,
            relations: ["customer"] // Include any relations if needed
        };
        // Retrieve all withdrawals
        const withdrawals = await withdrawalService.list(selector, config);
        // Respond with the retrieved withdrawals
        res.status(200).json(withdrawals);
    }
    catch (error) {
        // Handle any errors
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
// create a withdrawal
const POST = async (req, res) => {
    const withdrawalService = req.scope.resolve("withdrawalService");
    // basic validation of request body
    if (!req.body.total || !req.body.customer_id) {
        throw new Error("`total` and `customer_id` are required.");
    }
    const post = await withdrawalService.create(req.body);
    res.json({
        post,
    });
};
exports.POST = POST;
