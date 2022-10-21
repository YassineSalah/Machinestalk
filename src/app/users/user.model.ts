export class User {
    public id: number;
    public name: string;
    public email: string;
    public gender: string;
    public status: string;

    constructor(id: number,name: string, email: string, gender: string, status: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.status = status;
    }
}