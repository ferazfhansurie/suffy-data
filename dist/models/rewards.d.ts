import { BaseEntity } from "@medusajs/medusa";
import { Redeem } from "./redeem";
export declare class Rewards extends BaseEntity {
    price: number;
    image: string;
    details: string;
    caption: string;
    redeem: Redeem[];
    private beforeInsert;
}
