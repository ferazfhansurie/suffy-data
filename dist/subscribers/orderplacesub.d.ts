import OrderService from "../services/order";
declare class OrderPlacedSubscriber {
    protected readonly orderService: OrderService;
    constructor({ eventBusService, orderService, }: {
        eventBusService: any;
        orderService: any;
    });
    handleOrder: (order: any) => Promise<void>;
}
export default OrderPlacedSubscriber;
