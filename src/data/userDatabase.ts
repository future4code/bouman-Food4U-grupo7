import { User } from '../business/entities/users';
import { BaseDB } from './baseDatabase';
import { UserGateway } from '../business/gateways/userGateway';

export class UserDB extends BaseDB implements UserGateway {
   private userTable = "users";
   private relationsTable = "users_relations";

   private mapDBUserToUser(input?: any): User | undefined {
      return (
         input && new User(
            input.id,
            input.email,
            input.password
         )
      )
   };

   public async createUser(user: User): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.userTable} (id, email, password) VALUES (
           '${user.getId()}',
           '${user.getEmail()}',
           '${user.getPassword()}'
         )      
      `)
   };

   public async getUserByEmail(email: string): Promise<User | undefined> {
      const user = await this.connection.raw(`
         SELECT * FROM ${this.userTable} WHERE email = '${email}'
      `);

      if (!user[0][0]) {
         return undefined
      }

      return this.mapDBUserToUser(user[0][0])
   };

   public async getUserById(id: string): Promise<User | undefined> {
      const result = await this.connection.raw(`
          SELECT *
          FROM ${this.userTable}
          WHERE id='${id}'
      `)

      if (!result[0][0]) {
         return undefined;
      };

      return this.mapDBUserToUser(result[0][0])
   };

   async createUserFollowRelation(follower_id: string, followed_id: string): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.relationsTable} (follower_id, followed_id)
         VALUES ('${follower_id}', '${followed_id}')
      `)
   };
}