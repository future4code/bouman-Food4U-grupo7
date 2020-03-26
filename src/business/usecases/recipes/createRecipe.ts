import { v4 } from "uuid";
import { Recipe } from "../../entities/recipes";
import { RecipeGateway } from "../../gateways/recipeGateway";

interface CreateRecipeInput {
    title: string
    description: string
    userId: string
}

interface CreateRecipeOutput {
    message: string
}

export class CreateRecipeUC {
    constructor(private recipeGateway: RecipeGateway) { }

    async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {
        const recipeId = this.generateRicepeId()

        const newRecipe = new Recipe(recipeId, input.title, input.description, new Date(), input.userId)

        await this.recipeGateway.createRecipe(newRecipe)

        return {
            message: "Receita Cadastrada !"
        }
    };

    private generateRicepeId() {
        return v4()
    };
}