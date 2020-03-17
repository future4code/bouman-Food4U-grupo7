import { v4 } from "uuid";
import { Recipe } from "../entities/recipe";
import { RecipeGateway } from "../gateways/recipeGateway";

interface CreateRecipeInput {
    title: string
    description: string
    userId: string
}

interface CreateRecipeOutput{
    message: string
}

export class CreateRecipeUC {
    constructor(private recipeGateway: RecipeGateway) { }


    async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {


        // 1. Gerar um id para receita
        const recipeId = this.generateRicepeId()

        // 2. Criar uma nova entidade da receita
        const newRecipe = new Recipe(recipeId, input.title, input.description, new Date(), input.userId)

        // 3. Salvar essa receita no DB
        await this.recipeGateway.createRecipe(newRecipe)
        
        return{
            message: "Receita Cadastrada !"
        }
    }

    private generateRicepeId() {
        return v4()
    }
}