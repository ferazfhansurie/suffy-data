import { BaseEntity } from "@medusajs/medusa";
import { Rewards } from "./rewards";
import { Customer } from "./customer";
export declare class Redeem extends BaseEntity {
    status: string;
    customer_id: string;
    rewards_id: string;
    customer: Customer;
    rewards: Rewards;
    private beforeInsert;
}
