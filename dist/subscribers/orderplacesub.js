"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderPlacedSubscriber {
    constructor({ eventBusService, orderService, }) {
        this.handleOrder = async (order) => {
            console.log(order.id);
            await this.orderService.calculateLoyaltyPoints(order.id);
            // await this.customerService.makeLoyaltyPoints(order.customer_id, 2)
        };
        this.orderService = orderService;
        eventBusService.subscribe("order.placed", this.handleOrder);
    }
}
exports.default = OrderPlacedSubscriber;
