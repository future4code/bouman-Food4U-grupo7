import { BaseDB } from './baseDatabase';
import { Recipe } from '../business/entities/recipes';
import { FeedGateway } from '../business/gateways/feedGateway';
import { Feed } from '../business/entities/feeds';

export class FeedDB extends BaseDB implements FeedGateway {
   private relationsTable = "users_relations";
   private recipesTable = "recipes";
   private usersTable = "users"

   async getFeedforUser(userId: string): Promise<Feed[]> {
      const result = await this.connection.raw(`   
            SELECT recipes.*, users.email FROM ${this.relationsTable}
            JOIN ${this.usersTable} ON ${this.relationsTable}.followed_id=${this.usersTable}.id
            JOIN ${this.recipesTable} ON ${this.relationsTable}.followed_id=${this.recipesTable}.userId
            WHERE follower_id='${userId}'
            ORDER BY ${this.recipesTable}.creationDate DESC;
         `)

      return result[0].map((recipe: any) => {
         return new Feed(
            recipe.id,
            recipe.title,
            recipe.description,
            recipe.creationDate,
            recipe.userId,
            recipe.email)
      })
   };
}