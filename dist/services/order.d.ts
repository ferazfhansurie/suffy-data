import { OrderService as MedusaOrderService, CustomerService } from "@medusajs/medusa";
import { Customer } from "@medusajs/medusa";
import { CustomRepositoryCannotInheritRepositoryError } from "typeorm";
export default class OrderService extends MedusaOrderService {
    protected readonly customerService: CustomerService;
    protected readonly customerServiceRepository: CustomRepositoryCannotInheritRepositoryError;
    findRepo(updatedCustomer: any): Promise<Customer[]>;
    constructor(container: any);
    recursiveFunction(referrer: any, loyaltyPoints: any): Promise<void>;
    calculateLoyaltyPoints(orderId: any): Promise<import("@medusajs/medusa").Order>;
}
