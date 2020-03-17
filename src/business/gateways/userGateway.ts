import { User } from "../entities/users";

export interface UserGateway {
    getUserInfo(id: string): Promise<User | undefined>
}