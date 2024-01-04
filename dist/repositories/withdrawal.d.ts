import { Withdrawal } from "../models/withdrawal";
export declare const WithdrawalRepository: import("typeorm").Repository<Withdrawal> & {
    customMethod(): void;
};
export default WithdrawalRepository;
