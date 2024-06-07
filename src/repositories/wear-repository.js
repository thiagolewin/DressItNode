import config from "../configs/db-config.js";
import sql from "mssql";

export default class WearRepository{
    getFilterAsync = async (sqlquery) => {
        let pool = await sql.connect(config);
        let result = await pool.request().query(`SELECT * FROM Posts
        left join Wears on Posts.idWear = Wears.id 
        where ${sqlquery}`);
        console.log(result.recordset);
        return result.recordset;
    }
    getByIdAsync = async (table_name, id) => {
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('pid', sql.Int, id)
        .query(`SELECT * FROM ${table_name} WHERE id = @pid `);
        console.log(result.recordset.length);
        return result.recordset;
    }
}