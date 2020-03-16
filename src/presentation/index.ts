import express, { Request, Response } from "express";
import { signUpEndpoint } from "./endpoints/signUp";
import { loginEndpoint } from "./endpoints/login";
import { getUserInfoEndpoint } from "./endpoints/getUserInfo";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)
app.get('/user', getUserInfoEndpoint)

export default app;
