"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
// retrieve a post by its ID
const GET = async (req, res) => {
    const rewardsService = req.scope.resolve("rewardsService");
    const post = await rewardsService.retrieve(req.params.id);
    res.json({
        post,
    });
};
exports.GET = GET;
// update a post by its ID
const POST = async (req, res) => {
    const rewardsService = req.scope.resolve("rewardsService");
    // basic validation of request body
    if (req.body.id) {
        throw new Error("Can't update post ID");
    }
    const post = await rewardsService.update(req.params.id, req.body);
    res.json({
        post,
    });
};
exports.POST = POST;
// delete a post by its ID
const DELETE = async (req, res) => {
    const rewardsService = req.scope.resolve("rewardsService");
    await rewardsService.delete(req.params.id);
    res.status(200).end();
};
exports.DELETE = DELETE;
