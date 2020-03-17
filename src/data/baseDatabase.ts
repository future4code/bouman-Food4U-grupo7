import knex from 'knex';

export abstract class BaseDB {
   protected connection = knex({
      client: "mysql",
      connection: {
         host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
         port: 3306,
         user: "saulo",
         password: "Q5KHF$2pWchdsDvVu0ot",
         database: "bouman-saulo"
      }
   });
};