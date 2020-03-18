export interface UserGateway {
    createUserFollowRelation(follower_id: string, followed_id: string): Promise<void>
}