export class Recipe {
    constructor(private id: string, private title: string, private description: string, private creationDate: Date, private userId: string) { }

    getId() {
        return this.id
    }

    getTittle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getCreationDate() {
        return this.creationDate
    }

    getUserId() {
        return this.userId
    }

}