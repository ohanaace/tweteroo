import { IsString, IsNotEmpty, IsUrl } from "class-validator";
import User from "../entities/users-entities";

export class CreateUserDTO {
    @IsString({message: "All fields are required!"})
    @IsNotEmpty({message: "All fields are required!"})
    username: string;

    @IsNotEmpty({message: "All fields are required!"})
    @IsUrl({}, {message: "All fields are required!"})
    avatar: string;

    toUser() {
        return new User(this.username, this.avatar);
    };
};