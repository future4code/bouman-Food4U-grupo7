import { BaseDB } from './baseDatabase';
import { RecipeGateway } from '../business/gateways/recipeGateway';
import { Recipe } from '../business/entities/recipes';

export class RecipeDB extends BaseDB implements RecipeGateway {
    private recipeTable = "recipes";

    async createRecipe(recipe: Recipe): Promise<void> {

        await this.connection.insert({
            id: recipe.getId(),
            title: recipe.getTittle(),
            description: recipe.getDescription(),
            creationDate: recipe.getCreationDate(),
            userId: recipe.getUserId()
        }).into(this.recipeTable)
    };
}