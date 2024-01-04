import { CustomerService as MedusaCustomerService } from "@medusajs/medusa";
export default class CustomerService extends MedusaCustomerService {
    makeLoyaltyPoints(customerId: any, points: any): Promise<import("@medusajs/medusa").Customer>;
    makeReferralCode(customerId: any): Promise<import("@medusajs/medusa").Customer>;
}
