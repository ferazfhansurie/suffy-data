import { BaseEntity } from "@medusajs/medusa";
import { Customer } from "./customer";
export declare class Withdrawal extends BaseEntity {
    total: number;
    status: string;
    reason: string;
    customer_id: string;
    customer: Customer;
    private beforeInsert;
}
