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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FFMkI7QUFFekIsTUFBcUIsZUFBZ0IsU0FBUSx3QkFBcUI7SUFFaEUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxNQUFNO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNoRCxRQUFRLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQTtRQUVoQyw0Q0FBNEM7UUFDNUMsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXJFLE9BQU8sZUFBZSxDQUFBO0lBQ3hCLENBQUM7SUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtRQUMvQiwwQ0FBMEM7UUFDMUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpELG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUMxQixrQ0FBa0M7WUFDbEMsOEVBQThFO1lBQzlFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUUzRSxxREFBcUQ7WUFDckQsUUFBUSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7U0FDdEM7UUFFRCwrRUFBK0U7UUFFL0UsNENBQTRDO1FBQzVDLE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RSxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0NBQ0U7QUFoQ0Qsa0NBZ0NDIn0=