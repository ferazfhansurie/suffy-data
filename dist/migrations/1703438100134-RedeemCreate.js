"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeemCreate1703438100134 = void 0;
class RedeemCreate1703438100134 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "redeem" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "status" character varying NOT NULL, "customer_id" character varying NOT NULL, "rewards_id" character varying, CONSTRAINT "PK_be5fda3aac270b134ff9c21zzee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "redeem" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc232518e0" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "redeem" ADD CONSTRAINT "FK_c6fb082a3114f35g0cc27c518e0" FOREIGN KEY ("rewards_id") REFERENCES "rewards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "redeem" DROP CONSTRAINT "FK_c6fb082a3114f35g0cc27c518e0"`);
        await queryRunner.query(`ALTER TABLE "redeem" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc232518e0"`);
        await queryRunner.query(`DROP TABLE "redeem"`);
    }
}
exports.RedeemCreate1703438100134 = RedeemCreate1703438100134;
