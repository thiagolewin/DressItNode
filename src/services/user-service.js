import UserRepository from "../repositories/user-repository.js";

export default class UserService{
    getAllSync = async () => {
        const repo = new UserRepository();
        let returnArray = await repo.getAllSync();
        return returnArray;
    }
}