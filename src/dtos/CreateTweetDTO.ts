import { IsString, IsNotEmpty } from "class-validator";
import Tweet from "../entities/tweets-entities";

export class CreateTweetDTO {
    @IsString({message: "All fields are required!"})
    @IsNotEmpty({message: "All fields are required!"})
    username: string;

    @IsString({message: "All fields are required!"})
    @IsNotEmpty({message: "All fields are required!"})
    tweet: string;

    toTweet() {
        return new Tweet(this.username, this.tweet);
    };
};