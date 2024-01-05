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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMzM1MjgyNTUzMi1SZXdhcmRzQ3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTcwMzM1MjgyNTUzMi1SZXdhcmRzQ3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsMEJBQTBCO0lBRTVCLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHdUQUF3VCxDQUFDLENBQUE7SUFDclYsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFFbkQsQ0FBQztDQUVKO0FBWEQsZ0VBV0MifQ==