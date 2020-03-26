import { User } from "../entities/users";

export interface UserGateway {
    createUserFollowRelation(follower_id: string, followed_id: string): Promise<void>;
    updateUserPassword(newpassword: string, id: string): Promise<void>;
    getUserById(id: string): Promise<User | undefined>;
}

