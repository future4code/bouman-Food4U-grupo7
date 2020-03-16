import { v4 } from 'uuid';
import { UserDB } from '../../data/userDatabase';
import { User } from '../entities/users';
import * as bcrypt from 'bcrypt';

export class SignUpUC {
   constructor(private db: UserDB) { }

   public async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
      try {
         const userId = v4();

         if (input.password.length < 6) {
            throw new Error("Password precisa de no mínimo de 6 characteres.")
         } else {
            const encryPassword = await bcrypt.hash(input.password, 10)

            const newUser = new User(userId, input.email, encryPassword)

            await this.db.createUser(newUser)
            return {
               message: "Usuário criado com sucesso."
            }
         }

      } catch (err) {
         throw new Error(err.message)
      }
   }
};

export interface SignUpUCInput {
   email: string,
   password: string
}

export interface SignUpUCOutput {
   message: string
}