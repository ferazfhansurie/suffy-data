import { FindConfig, Selector, TransactionBaseService } from "@medusajs/medusa";
import { RewardsRepository } from "../repositories/rewards";
import { Rewards } from "../models/rewards";
declare class RewardsService extends TransactionBaseService {
    protected rewardsRepository_: typeof RewardsRepository;
    constructor(container: any);
    listAndCount(selector?: Selector<Rewards>, config?: FindConfig<Rewards>): Promise<[Rewards[], number]>;
    list(selector?: Selector<Rewards>, config?: FindConfig<Rewards>): Promise<Rewards[]>;
    retrieve(id: string, config?: FindConfig<Rewards>): Promise<Rewards>;
    create(data: Pick<Rewards, "price" | "image" | "caption" | "details">): Promise<Rewards>;
    update(id: string, data: Omit<Partial<Rewards>, "id">): Promise<Rewards>;
    delete(id: string): Promise<void>;
}
export default RewardsService;
