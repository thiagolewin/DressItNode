import WearRepository from "../repositories/wear-repository.js";

export default class WearService{
    getFilterAsync = async (generos,precios,colores,prendas) => {
        let sqlquery = ''
        if(generos != undefined && generos.length > 0){
            if(generos.length > 1){
                sqlquery += '('
                for(let i = 0; i<generos.length; i++){
                    sqlquery += `Wears.idGender = ${generos[i]} OR `
                }
                sqlquery = sqlquery.substring(0,((sqlquery.length)-4))
                sqlquery += ')'
            }else{
                sqlquery += `Wears.idGender = ${generos[0]} `
            }
        }
        
        if(precios != undefined){
            if(sqlquery != ''){
                sqlquery += ` AND `
            }
            sqlquery += `(Posts.price > ${precios[0]} AND Posts.price < ${precios[1]})` 
        }
        if(colores != undefined && colores.length > 0){
            
            if(sqlquery != ''){
                sqlquery += ` AND `
            }
            if(colores.length > 1){
                sqlquery += '('
                for(let i = 0; i<colores.length; i++){
                    sqlquery += `Wears.idColor = ${colores[i]} OR `
                }
                sqlquery = sqlquery.substring(0,((sqlquery.length)-4))
                sqlquery += ')'
            }else{
                sqlquery += `Wears.idColor = ${colores[0]}`
            }
        }

        if(prendas != undefined && prendas.length > 0){
            if(sqlquery != ''){
                sqlquery += ` AND `
            }
            if(prendas.length > 1){
                sqlquery += '('
                for(let i = 0; i<prendas.length; i++){
                    sqlquery += `Wears.wearType = ${prendas[i]} OR `
                }
                sqlquery = sqlquery.substring(0,((sqlquery.length)-4))
                sqlquery += ')'
            }else{
                sqlquery += `Wears.wearType = ${prendas[0]} `
            }
        }
        console.log(sqlquery)
        const repo = new WearRepository();
        let returnArray = await repo.getFilterAsync(sqlquery);
        return returnArray;
    }
    getByIdAsync = async (table_name, id) => {
        const repo = new CommonRepository();
        let returnArray = await repo.getByIdAsync(table_name, id);
        return returnArray;
    }
}
