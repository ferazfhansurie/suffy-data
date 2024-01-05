"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/utils");
class RewardsService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.rewardsRepository_ = container.rewardsRepository;
    }
    async listAndCount(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const rewardsRepo = this.activeManager_.withRepository(this.rewardsRepository_);
        const query = (0, medusa_1.buildQuery)(selector, config);
        return rewardsRepo.findAndCount(query);
    }
    async list(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const [rewards] = await this.listAndCount(selector, config);
        return rewards;
    }
    async retrieve(id, config) {
        const rewardsRepo = this.activeManager_.withRepository(this.rewardsRepository_);
        const query = (0, medusa_1.buildQuery)({
            id,
        }, config);
        const rewards = await rewardsRepo.findOne(query);
        if (!rewards) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Post was not found");
        }
        return rewards;
    }
    async create(data) {
        return this.atomicPhase_(async (manager) => {
            const rewardsRepo = manager.withRepository(this.rewardsRepository_);
            const rewards = rewardsRepo.create();
            rewards.price = data.price;
            rewards.caption = data.caption;
            rewards.image = data.image;
            rewards.details = data.details;
            const result = await rewardsRepo.save(rewards);
            return result;
        });
    }
    async update(id, data) {
        return await this.atomicPhase_(async (manager) => {
            const rewardsRepo = manager.withRepository(this.rewardsRepository_);
            const rewards = await this.retrieve(id);
            Object.assign(rewards, data);
            return await rewardsRepo.save(rewards);
        });
    }
    async delete(id) {
        return await this.atomicPhase_(async (manager) => {
            const rewardsRepo = manager.withRepository(this.rewardsRepository_);
            const rewards = await this.retrieve(id);
            await rewardsRepo.remove([rewards]);
        });
    }
}
exports.default = RewardsService;
