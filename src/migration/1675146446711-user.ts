import {MigrationInterface, QueryRunner} from "typeorm";

export class user1675146446711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        
       await queryRunner.query(`
       CREATE TABLE user_account (
        user_id serial PRIMARY KEY,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        password VARCHAR ( 50 ) NOT NULL,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default CURRENT_TIMESTAMP not null

        
    )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
