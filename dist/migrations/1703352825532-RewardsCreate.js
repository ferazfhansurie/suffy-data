"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsCreate1703352825532 = void 0;
class RewardsCreate1703352825532 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "rewards" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "price" character varying NOT NULL, "image" character varying NOT NULL, "details" character varying, "caption" character varying)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "rewards"`);
    }
}
exports.RewardsCreate1703352825532 = RewardsCreate1703352825532;
