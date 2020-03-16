import knex from 'knex';
import dotenv from 'dotenv';

// dotenv.config();
// console.log(
//    process.env.HOST,
//    process.env.USER,
//    process.env.PASSWORD,
//    process.env.DATABASE
// );

export abstract class BaseDB {
   protected connection = knex({
      client: "mysql",
      connection: {
         host: process.env.HOST,
         port: 3000,
         user: process.env.USER,
         password: process.env.PASSWORD,
         database: process.env.DATABASE
      }
   });
};