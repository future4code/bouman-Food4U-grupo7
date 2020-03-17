import { UserGateway } from "../gateways/userGateway";

interface FollowUserInput{
    userId: string,
    userToFollowId: string
}


export class FollowUserUC {
    constructor(private userGateway: UserGateway) {}
   async execute(input: FollowUserInput){
        await this.userGateway.createUserFollowRelation(input.userId, input.userToFollowId)
    }
}