import express, { Request, Response } from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { getUserInfoEndpoint } from "./endpoints/user/getUserInfo";
import { createRecipeEndPoint } from "./endpoints/recipe/createRecipe";
import { followUserEndpoint } from "./endpoints/user/followUser";
import { getFeedforUserEndpoint } from "./endpoints/feeds/getFeedforUser";
import { UpdateUserPasswordEndpoint } from "./endpoints/user/updateUserPassword";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)
app.get('/user', getUserInfoEndpoint)

app.post('/recipe', createRecipeEndPoint)
app.post('/user/follow', followUserEndpoint)
app.get('/feed', getFeedforUserEndpoint)

app.post('/user/editpassword', UpdateUserPasswordEndpoint)

export default app;

//1.a) Foi tranquilo até por que essas modificações não alteram muito o código, sendo que foi preciso
//mudar apenas alguns arquivos e adicionar (colunas nome e data de nascimento) esses requerimentos 
//novos no servidor.

//1.b) Não é afetado muito por que nada foi alterado para a geração do token que é necessário para pegar
//as informações do usuário, apenas irá mostrar mais campos a mais no retorno (no caso o nome e a data de 
//nascimento).

//3.a)

//4.a)

//4.b)

//5.a)

//5.b)

//5.c)
