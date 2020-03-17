import express, { Request, Response } from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { getUserInfoEndpoint } from "./endpoints/user/getUserInfo";
import { createRecipeEndPoint } from "./endpoints/recipe/createRecipe";
import { followUserEndpoint } from "./endpoints/user/followUser";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)
app.get('/user', getUserInfoEndpoint)

app.post('/recipe', createRecipeEndPoint )

app.post('/user/follow', followUserEndpoint)

export default app;
