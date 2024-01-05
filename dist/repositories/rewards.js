"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsRepository = void 0;
const rewards_1 = require("../models/rewards");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.RewardsRepository = database_1.dataSource
    .getRepository(rewards_1.Rewards)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.RewardsRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcmV3YXJkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBMkM7QUFDM0MscUVBRStDO0FBRWxDLFFBQUEsaUJBQWlCLEdBQUcscUJBQVU7S0FDeEMsYUFBYSxDQUFDLGlCQUFPLENBQUM7S0FDdEIsTUFBTSxDQUFDO0lBQ04sWUFBWTtRQUNWLGlDQUFpQztRQUNqQyxPQUFNO0lBQ1IsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHlCQUFpQixDQUFBIn0=