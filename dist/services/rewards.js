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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9yZXdhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBSzJCO0FBR3pCLDJDQUE2QztBQUU3QyxNQUFNLGNBQWUsU0FBUSwrQkFBc0I7SUFHakQsWUFBWSxTQUFTO1FBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFBO0lBQ3ZELENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUNoQixRQUE0QixFQUM1QixTQUE4QjtRQUM1QixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7S0FDaEI7UUFDQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUN4QixDQUFBO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQkFBVSxFQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUUxQyxPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQ1IsUUFBNEIsRUFDNUIsU0FBOEI7UUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO1FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFM0QsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQ1osRUFBVSxFQUNWLE1BQTRCO1FBRTVCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUNw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