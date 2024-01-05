"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
class CustomerService extends medusa_1.CustomerService {
    async makeLoyaltyPoints(customerId, points) {
        const customer = await this.retrieve(customerId);
        customer.loyaltyPoints += points;
        // Save the updated customer to the database
        const updatedCustomer = await this.customerRepository_.save(customer);
        return updatedCustomer;
    }
    async makeReferralCode(customerId) {
        // Retrieve the customer from the database
        const customer = await this.retrieve(customerId);
        // Check if the customer already has a referral code
        if (!customer.referralCode) {
            // Generate a unique referral code
            // This is a basic example. You may want to use a more complex or safer method
            const referralCode = Math.random().toString(36).substr(2, 9).toUpperCase();
            // Assign the generated referral code to the customer
            customer.referralCode = referralCode;
        }
        // You can implement any additional logic here, such as updating loyalty points
        // Save the updated customer to the database
        const updatedCustomer = await this.customerRepository_.save(customer);
        return updatedCustomer;
    }
}
exports.default = CustomerService;
