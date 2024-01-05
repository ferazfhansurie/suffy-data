"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// Example route to list withdrawals for the logged-in user
const GET = async (req, res) => {
    const redeemService = req.scope.resolve("redeemService");
    const loggedInUserId = req.user.customer_id; // Assuming you have a way to get the logged-in user's ID
    const config = {
        skip: 0,
        take: 20,
        relations: ["rewards"] // Include any relations if needed
    };
    try {
        const redeems = await redeemService.listById({}, config, loggedInUserId);
        res.status(200).json({ redeems });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
