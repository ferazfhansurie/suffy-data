"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/utils");
class RedeemService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.redeemRepository_ = container.redeemRepository;
    }
    async listAndCount(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const rewardsRepo = this.activeManager_.withRepository(this.redeemRepository_);
        const query = (0, medusa_1.buildQuery)(selector, config);
        return rewardsRepo.findAndCount(query);
    }
    async list(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const [redeem] = await this.listAndCount(selector, config);
        return redeem;
    }
    async retrieve(id, config) {
        const redeemRepo = this.activeManager_.withRepository(this.redeemRepository_);
        const query = (0, medusa_1.buildQuery)({
            id,
        }, config);
        const redeem = await redeemRepo.findOne(query);
        if (!redeem) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Redeem was not found");
        }
        return redeem;
    }
    async listById(selector = {}, config = {
        skip: 0,
        take: 20,
        relations: [],
    }, customerId) {
        if (customerId) {
            selector.customer_id = customerId;
        }
        const [redeems] = await this.listAndCount(selector, config);
        return redeems;
    }
    async create(data) {
        return this.atomicPhase_(async (manager) => {
            const redeemRepo = manager.withRepository(this.redeemRepository_);
            const redeem = redeemRepo.create();
            redeem.status = "pending";
            redeem.customer_id = data.customer_id;
            redeem.rewards_id = data.rewards_id;
            console.log(redeem);
            const result = await redeemRepo.save(redeem);
            return result;
        });
    }
    async update(id, data) {
        return await this.atomicPhase_(async (manager) => {
            const redeemRepo = manager.withRepository(this.redeemRepository_);
            const redeem = await this.retrieve(id);
            Object.assign(redeem, data);
            return await redeemRepo.save(redeem);
        });
    }
    async delete(id) {
        return await this.atomicPhase_(async (manager) => {
            const redeemRepo = manager.withRepository(this.redeemRepository_);
            const redeem = await this.retrieve(id);
            await redeemRepo.remove([redeem]);
        });
    }
}
exports.default = RedeemService;
