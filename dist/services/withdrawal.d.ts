import { FindConfig, Selector, TransactionBaseService } from "@medusajs/medusa";
import { WithdrawalRepository } from "../repositories/withdrawal";
import { Withdrawal } from "../models/withdrawal";
declare class WithdrawalService extends TransactionBaseService {
    protected withdrawalRepository_: typeof WithdrawalRepository;
    constructor(container: any);
    listAndCount(selector?: Selector<Withdrawal>, config?: FindConfig<Withdrawal>): Promise<[Withdrawal[], number]>;
    list(selector?: Selector<Withdrawal>, config?: FindConfig<Withdrawal>): Promise<Withdrawal[]>;
    retrieve(id: string, config?: FindConfig<Withdrawal>): Promise<Withdrawal>;
    create(data: Pick<Withdrawal, "total" | "customer_id" | "status" | "reason">): Promise<Withdrawal>;
    update(id: string, data: Omit<Partial<Withdrawal>, "id">): Promise<Withdrawal>;
    listByCustomerPending(selector?: Selector<Withdrawal>, config?: FindConfig<Withdrawal>, customerId?: string): Promise<Withdrawal[]>;
    listByCustomerCompleted(selector?: Selector<Withdrawal>, config?: FindConfig<Withdrawal>, customerId?: string): Promise<Withdrawal[]>;
    delete(id: string): Promise<void>;
}
export default WithdrawalService;
