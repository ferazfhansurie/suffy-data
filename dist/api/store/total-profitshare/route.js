"use strict";
// In your API route (e.g., src/api/orders/all-with-total.js)
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    try {
        const orderService = req.scope.resolve("orderService");
        const orders = await orderService.list({}); // List all orders
        const total = orders.reduce((sum, order) => sum + order.total, 0);
        res.status(200).json(total * 0.19);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
