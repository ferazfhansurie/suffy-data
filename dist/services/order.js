"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const medusa_2 = require("@medusajs/medusa");
class OrderService extends medusa_1.OrderService {
    async findRepo(updatedCustomer) {
        const custRepo = this.activeManager_.getRepository(medusa_2.Customer);
        return await custRepo.save(updatedCustomer);
    }
    // async test(updatedCustomer): Promise<Item[]> {
    //   const custRepo = this.activeManager_.getRepository(
    //     Item
    //   )
    //   return await custRepo.
    // }
    constructor(container) {
        super(container);
        this.customerService = container.customerService;
    }
    async recursiveFunction(referrer, loyaltyPoints) {
        var _a;
        const referrerReferral = (_a = referrer.metadata) === null || _a === void 0 ? void 0 : _a.referrer;
        if (referrerReferral) {
            const referrer = "cus_01" + referrerReferral;
            const referrerCust = await this.customerService.retrieve(referrer);
            console.log(loyaltyPoints * 0.05);
            const referrerPoints = Math.round((loyaltyPoints * 0.05) * 100);
            referrerCust.loyaltyPoints += referrerPoints;
            await this.findRepo(referrerCust);
            await this.recursiveFunction(referrerCust, loyaltyPoints);
        }
    }
    async calculateLoyaltyPoints(orderId) {
        var _a;
        const order = await this.retrieveWithTotals(orderId);
        console.log(order.customer_id);
        const customer = await this.customerService.retrieve(order.customer_id);
        console.log(customer);
        const referrerId = (_a = customer.metadata) === null || _a === void 0 ? void 0 : _a.referrer;
        console.log(String(referrerId));
        const loyaltyPoints = order.total / 100;
        console.log(order.total);
        console.log(order.total);
        console.log(loyaltyPoints);
        if (referrerId) {
            // Logic to handle the referrer
            // For example, update the referrer's loyalty points
            const referrer = "cus_01" + customer.metadata.referrer;
            console.log(referrer);
            const referrercust = await this.customerService.retrieve(referrer);
            console.log(referrercust);
            console.log(loyaltyPoints * 0.2);
            const referrerPoints = Math.round((loyaltyPoints * 0.20) * 100);
            console.log(referrerPoints);
            referrercust.loyaltyPoints += referrerPoints;
            await this.findRepo(referrercust);
            await this.recursiveFunction(referrercust, loyaltyPoints);
        }
        // Assuming order.cart.items is an array of items and each item has a 'quantity' property
        const totalQuantity = order.items.reduce((total, item) => {
            return total + item.quantity;
        }, 0); // Start with a total of 0
        customer.totalOrders += 1;
        console.log(totalQuantity);
        if (totalQuantity >= 10) {
            console.log(totalQuantity);
            customer.totalBulkPurchase = customer.totalBulkPurchase + Math.floor(totalQuantity / 10);
        }
        order.loyaltyPoints += loyaltyPoints;
        console.log(order);
        const updatedOrder = await this.orderRepository_.save(order);
        await this.findRepo(customer);
        console.log(updatedOrder);
        // Apply the loyalty points to the customer's account
        //   await this.customerService.makeLoyaltyPoints(order.customer_id, loyaltyPoints)
        return updatedOrder;
    }
}
exports.default = OrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FLMkI7QUFDekIsNkNBQWlEO0FBR2pELE1BQXFCLFlBQWEsU0FBUSxxQkFBa0I7SUFJMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlO1FBQzFCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUNoRCxpQkFBUSxDQUNULENBQUE7UUFDRCxPQUFPLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsaURBQWlEO0lBQ2pELHdEQUF3RDtJQUN4RCxXQUFXO0lBQ1gsTUFBTTtJQUNOLDJCQUEyQjtJQUMzQixJQUFJO0lBRU4sWUFBWSxTQUFTO1FBQ2pCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUE7SUFFcEQsQ0FBQztJQUdELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsYUFBYTs7UUFDN0MsTUFBTSxnQkFBZ0IsR0FBRyxNQUFBLFFBQVEsQ0FBQyxRQUFRLDBDQUFFLFFBQVEsQ0FBQztRQUNyRCxJQUFHLGdCQUFnQixFQUFDO1lBQ2xCLE1BQU0sUUFBUSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUM3QyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxDQUFBO1lBQy9CLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0QsWUFBWSxDQUFDLGFBQWEsSUFB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