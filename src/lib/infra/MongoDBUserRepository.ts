import * as dotenv from 'dotenv'
import { IUser } from "../domain/User";
import Database from "./Database";
import { IUserModel, UserModel } from "./User.schema";

dotenv.config()

export class MongoDBUserRepository {

    private userModel: IUserModel

    constructor() {
        new Database({
            user: process.env.DATABASE_USER!,
            password: process.env.DATABASE_PASS!,
            collection: process.env.DATABASE_NAME!,
        })

        this.userModel = UserModel.getInstance()
    }

    async readOne(user: string): Promise<IUser | null> {
        const findedUser = await this.userModel.findOne({ user })
        return findedUser
    }
}