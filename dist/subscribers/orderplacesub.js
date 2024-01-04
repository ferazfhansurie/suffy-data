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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJwbGFjZXN1Yi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpYmVycy9vcmRlcnBsYWNlc3ViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBTSxxQkFBcUI7SUFJekIsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEdBQUc7UUFLOUMsZ0JBQVcsR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFckIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN4RCxxRUFBcUU7UUFFdkUsQ0FBQyxDQUFBO1FBVkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDaEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzdELENBQUM7Q0FTRjtBQUVELGtCQUFlLHFCQUFxQixDQUFBIn0=