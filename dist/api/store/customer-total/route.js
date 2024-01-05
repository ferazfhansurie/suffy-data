"use strict";
// src/api/count-customers.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    try {
        const customerService = req.scope.resolve("customerService");
        // Count the total number of customers
        const totalCustomers = await customerService.count();
        // Send the count as a response
        res.status(200).json({ totalCustomers });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
