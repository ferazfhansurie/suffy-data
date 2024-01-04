import { FindConfig, Selector, TransactionBaseService } from "@medusajs/medusa";
import { RedeemRepository } from "../repositories/redeem";
import { Redeem } from "../models/redeem";
declare class RedeemService extends TransactionBaseService {
    protected redeemRepository_: typeof RedeemRepository;
    constructor(container: any);
    listAndCount(selector?: Selector<Redeem>, config?: FindConfig<Redeem>): Promise<[Redeem[], number]>;
    list(selector?: Selector<Redeem>, config?: FindConfig<Redeem>): Promise<Redeem[]>;
    retrieve(id: string, config?: FindConfig<Redeem>): Promise<Redeem>;
    listById(selector?: Selector<Redeem>, config?: FindConfig<Redeem>, customerId?: string): Promise<Redeem[]>;
    create(data: Pick<Redeem, "status" | "customer_id" | "rewards_id">): Promise<Redeem>;
    update(id: string, data: Omit<Partial<Redeem>, "id">): Promise<Redeem>;
    delete(id: string): Promise<void>;
}
export default RedeemService;
