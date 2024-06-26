import PostRepository from "../repositories/post-repository.js";

export default class WearService {
    getFilterAsync = async (generos, precios, colores, prendas, offset, limit) => {
        console.log(offset)
        offset = offset || 0;
        limit = limit || 30;
        let filters = {
            generos,
            precios,
            colores,
            prendas,
            offset,
            limit
        };

        const repo = new PostRepository();
        let returnArray = await repo.getFilterAsync(filters);
        return returnArray;
    }

    getByIdAsync = async (table_name, id) => {
        const repo = new CommonRepository();
        let returnArray = await repo.getByIdAsync(table_name, id);
        return returnArray;
    }
}
