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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZWVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3JlZGVlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUsyQjtBQUd6QiwyQ0FBNkM7QUFFN0MsTUFBTSxhQUFjLFNBQVEsK0JBQXNCO0lBR2hELFlBQVksU0FBUztRQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FDaEIsUUFBMkIsRUFDM0IsU0FBNkI7UUFDM0IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO1FBQ0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQTtRQUVELE1BQU0sS0FBSyxHQUFHLElBQUEsbUJBQVUsRUFBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFMUMsT0FBTyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUNSLFFBQTJCLEVBQzNCLFNBQTZCO1FBQzNCLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtLQUNoQjtRQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRTFELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQ1osRUFBVSxFQUNWLE1BQTJCO1FBRTNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUNuRCxJ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