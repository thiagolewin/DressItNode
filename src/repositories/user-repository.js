import config from "../configs/db-config.js";
import sql from "mssql";

export default class UserRepository{
    getAllSync = async () => {
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT * FROM Users");
        console.log(result.recordset.length);
    }
}