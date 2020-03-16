import { UserDB } from '../../data/userDatabase';

export class GetUserInfoUC {
   constructor(private db: UserDB) { }

   public async execute(input: GetUserInfoUCInput): Promise<GetUserInfoUCOutput> {
      try {
         const user = await this.db.getUserById(input.id)

         if(!user) {
            throw new Error("Usuário não encontrado.")
         }

         return {
            id: user.getId(),
            email: user.getEmail(),
            message: "Informações retornadas com sucesso."
         } 
       
      } catch (err) {
         throw new Error(err.message)
      }
   }
};

export interface GetUserInfoUCInput {
  id: string
};

export interface GetUserInfoUCOutput {
   id: string,
   email: string,
   message: string
};