"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/utils");
const typeorm_1 = require("typeorm");
class WithdrawalService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.withdrawalRepository_ = container.withdrawalRepository;
    }
    async listAndCount(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const withdrawalRepo = this.activeManager_.withRepository(this.withdrawalRepository_);
        const query = (0, medusa_1.buildQuery)(selector, config);
        return withdrawalRepo.findAndCount(query);
    }
    async list(selector, config = {
        skip: 0,
        take: 20,
        relations: ["customer"],
    }) {
        const [withdrawals] = await this.listAndCount(selector, config);
        return withdrawals;
    }
    async retrieve(id, config) {
        const withdrawalRepo = this.activeManager_.withRepository(this.withdrawalRepository_);
        const query = (0, medusa_1.buildQuery)({
            id,
        }, config);
        const post = await withdrawalRepo.findOne(query);
        if (!post) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Post was not found");
        }
        return post;
    }
    async create(data) {
        return this.atomicPhase_(async (manager) => {
            const withdrawalRepo = manager.withRepository(this.withdrawalRepository_);
            const withdrawal = withdrawalRepo.create();
            withdrawal.total = data.total;
            withdrawal.customer_id = data.customer_id;
            withdrawal.status = "pending";
            withdrawal.reason = data.reason;
            const result = await withdrawalRepo.save(withdrawal);
            return result;
        });
    }
    async update(id, data) {
        return await this.atomicPhase_(async (manager) => {
            const withdrawalRepo = manager.withRepository(this.withdrawalRepository_);
            const withdrawal = await this.retrieve(id);
            Object.assign(withdrawal, data);
            return await withdrawalRepo.save(withdrawal);
        });
    }
    async listByCustomerPending(selector = {}, config = {
        skip: 0,
        take: 20,
        relations: [],
    }, customerId) {
        if (customerId) {
            selector.customer_id = customerId;
            selector.status = "pending";
        }
        const [withdrawals] = await this.listAndCount(selector, config);
        return withdrawals;
    }
    async listByCustomerCompleted(selector = {}, config = {
        skip: 0,
        take: 20,
        relations: [],
    }, customerId) {
        if (customerId) {
            selector.customer_id = customerId;
            selector.status = (0, typeorm_1.Not)("pending");
        }
        const [withdrawals] = await this.listAndCount(selector, config);
        return withdrawals;
    }
    async delete(id) {
        return await this.atomicPhase_(async (manager) => {
            const withdrawalRepo = manager.withRepository(this.withdrawalRepository_);
            const withdrawal = await this.retrieve(id);
            await withdrawalRepo.remove([withdrawal]);
        });
    }
}
exports.default = WithdrawalService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy93aXRoZHJhd2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBS3lCO0FBR3pCLDJDQUE2QztBQUM3QyxxQ0FBNkI7QUFDN0IsTUFBTSxpQkFBa0IsU0FBUSwrQkFBc0I7SUFHcEQsWUFBWSxTQUFTO1FBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFBO0lBQzdELENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUNoQixRQUErQixFQUMvQixTQUFpQztRQUMvQixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7S0FDaEI7UUFDQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FDdkQsSUFBSSxDQUFDLHFCQUFxQixDQUMzQixDQUFBO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQkFBVSxFQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUUxQyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQ1IsUUFBK0IsRUFDL0IsU0FBaUM7UUFDL0IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztLQUMxQjtRQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRS9ELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUNaLEVBQVUsRUFDVixNQUErQjtRQUUvQixNQUFNLGNBQWMsR0FB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