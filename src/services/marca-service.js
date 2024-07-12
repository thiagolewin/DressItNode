import MarcaRepository from "../repositories/marca-repository.js";

export default class MarcaService{
    getInfouser= async (user) => {
        const repo = new MarcaRepository();
        let returnArray = await repo.getInfouser(user);
        return returnArray;
    }
    getPostUser = async (user,offset) => {
        const repo = new MarcaRepository();
        let returnArray = await repo.getPostUser(user,offset);
        return returnArray;
    }
}