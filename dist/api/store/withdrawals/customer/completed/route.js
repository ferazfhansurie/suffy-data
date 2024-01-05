"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// Example route to list withdrawals for the logged-in user
const GET = async (req, res) => {
    const withdrawalService = req.scope.resolve("withdrawalService");
    const loggedInUserId = req.user.customer_id; // Assuming you have a way to get the logged-in user's ID
    try {
        const withdrawals = await withdrawalService.listByCustomerCompleted({}, {}, loggedInUserId);
        res.status(200).json({ withdrawals });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
