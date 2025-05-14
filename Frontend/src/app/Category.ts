export default class Category {
    name: string;
    id: number;
    user_id: number;
    constructor(name: string, id: number, user_id: number) {
        this.name = name;
        this.id = id;
        this.user_id = user_id;
    }
}