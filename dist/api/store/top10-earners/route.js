"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const medusa_1 = require("@medusajs/medusa");
const GET = async (req, res) => {
    try {
        const customerService = req.scope.resolve("customerService");
        const manager = req.scope.resolve("manager");
        const customerRepository = manager.getRepository(medusa_1.Customer);
        // Fetch all customers
        const customers = await customerRepository.find({
            relations: ["billing_address"],
        });
        // Sort customers by 'loyaltyPoints' in descending order
        const sortedCustomers = customers.sort((a, b) => {
            return b.loyaltyPoints - a.loyaltyPoints; // For descending order
        });
        const topCustomers = sortedCustomers.slice(0, 10);
        res.status(200).json(topCustomers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
