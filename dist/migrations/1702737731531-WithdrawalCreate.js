"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalCreate1702737731531 = void 0;
class WithdrawalCreate1702737731531 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "withdrawal" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "total" character varying NOT NULL, "status" character varying NOT NULL, "reason" character varying,"customer_id" character varying, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "withdrawal" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "withdrawal" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`);
        await queryRunner.query(`DROP TABLE "withdrawal"`);
    }
}
exports.WithdrawalCreate1702737731531 = WithdrawalCreate1702737731531;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMjczNzczMTUzMS1XaXRoZHJhd2FsQ3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTcwMjczNzczMTUzMS1XaXRoZHJhd2FsQ3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsNkJBQTZCO0lBRS9CLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDhYQUE4WCxDQUFDLENBQUE7UUFDdlosTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDBLQUEwSyxDQUFDLENBQUE7SUFDdk0sQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDJFQUEyRSxDQUFDLENBQUE7UUFDcEcsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFHdEQsQ0FBQztDQUVKO0FBZEQsc0VBY0MifQ==