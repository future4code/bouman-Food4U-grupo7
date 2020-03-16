import { UserDB } from '../../data/userDatabase';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class LoginUC {
   constructor(private db: UserDB) { }

   public async execute(input: LoginUCInput): Promise<LoginUCOutput> {
      const user = await this.db.getUserByEmail(input.email);

      if (!user) {
         throw new Error("Email incorreto.")
      }

      const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword());

      if (!isPasswordCorrect) {
         throw new Error("Senha incorreta.")
      }

      const token = jwt.sign({ id: user.getId() }, "saulo-bouman", {
         expiresIn: '1h'
      })

      return {
         message: "Usuário logado com sucesso",
         token: token
      }
   }
};

export interface LoginUCInput {
   email: string,
   password: string
}

export interface LoginUCOutput {
   message: string,
   token: string
}