import {MigrationInterface, QueryRunner} from "typeorm";

export class item1675231505327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE dynamic_item (
            Item_id serial PRIMARY KEY,
            Item_name VARCHAR ( 50 ) UNIQUE NOT NULL,
            price VARCHAR ( 50 ) NOT NULL,
            type VARCHAR ( 255 ) NOT NULL,
            user_id number NOT NULL,
            created_at timestamp default CURRENT_TIMESTAMP not null,
            updated_at timestamp default CURRENT_TIMESTAMP not null

        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
