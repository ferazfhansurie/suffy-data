"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeemRepository = void 0;
const redeem_1 = require("../models/redeem");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
exports.RedeemRepository = database_1.dataSource
    .getRepository(redeem_1.Redeem)
    .extend({
    customMethod() {
        // TODO add custom implementation
        return;
    },
});
exports.default = exports.RedeemRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZWVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcG9zaXRvcmllcy9yZWRlZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXlDO0FBQ3pDLHFFQUUrQztBQUVsQyxRQUFBLGdCQUFnQixHQUFHLHFCQUFVO0tBQ3ZDLGFBQWEsQ0FBQyxlQUFNLENBQUM7S0FDckIsTUFBTSxDQUFDO0lBQ04sWUFBWTtRQUNWLGlDQUFpQztRQUNqQyxPQUFNO0lBQ1IsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHdCQUFnQixDQUFBIn0=