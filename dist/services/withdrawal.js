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
