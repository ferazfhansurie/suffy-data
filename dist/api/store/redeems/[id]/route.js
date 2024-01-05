"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
// retrieve a post by its ID
const GET = async (req, res) => {
    const redeemService = req.scope.resolve("redeemService");
    const redeem = await redeemService.retrieve(req.params.id);
    res.json({
        redeem,
    });
};
exports.GET = GET;
// update a post by its ID
const POST = async (req, res) => {
    const redeemService = req.scope.resolve("redeemService");
    // basic validation of request body
    if (req.body.id) {
        throw new Error("Can't update post ID");
    }
    const redeem = await redeemService.update(req.params.id, req.body);
    res.json({
        redeem,
    });
};
exports.POST = POST;
// delete a post by its ID
const DELETE = async (req, res) => {
    const redeemService = req.scope.resolve("redeemService");
    await redeemService.delete(req.params.id);
    res.status(200).end();
};
exports.DELETE = DELETE;
