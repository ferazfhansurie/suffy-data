import { Withdrawal } from "./withdrawal";
import { Redeem } from "./redeem";
import { Customer as MedusaCustomer } from "@medusajs/medusa";
export declare class Customer extends MedusaCustomer {
    loyaltyPoints: number;
    referralCode: String;
    referralInput: String;
    referrer: String;
    totalOrders: number;
    recruits: number;
    totalBulkPurchase: number;
    totalProfitShare: number;
    pendingFunds: number;
    withdrawals: Withdrawal[];
    redeem: Redeem[];
}
