"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
async function GET(req, res) {
    const onboardingService = req.scope.resolve("onboardingService");
    const status = await onboardingService.retrieve();
    res.status(200).json({ status });
}
exports.GET = GET;
async function POST(req, res) {
    const onboardingService = req.scope.resolve("onboardingService");
    const manager = req.scope.resolve("manager");
    const status = await manager.transaction(async (transactionManager) => {
        return await onboardingService
            .withTransaction(transactionManager)
            .update(req.body);
    });
    res.status(200).json({ status });
}
exports.POST = POST;
