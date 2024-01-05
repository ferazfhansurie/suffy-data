"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// retrieve a post by its ID
const GET = async (req, res) => {
    const rewardsService = req.scope.resolve("rewardsService");
    const post = await rewardsService.retrieve(req.params.id);
    res.json({
        post,
    });
};
exports.GET = GET;
