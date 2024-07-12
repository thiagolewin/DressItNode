import config from "../configs/db-config.js";
import sql from "mssql";

export default class MarcaRepository {
    getInfouser = async (user) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('puser', sql.VarChar, user)
                .query(`SELECT id,username, email, pfp FROM USERS WHERE username = @puser`);
            return result.recordset;
        } catch (error) {
            console.error('Error fetching user info:', error);
            return null;
        }
    }

    getPostUser = async (user, offset) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('puser', sql.Int, user)
                .input('offset', sql.Int, offset)
                .query(`SELECT * FROM Posts WHERE idCreator = @puser ORDER BY creationDate DESC OFFSET @offset ROWS FETCH NEXT 20 ROWS ONLY`);
            return result.recordset;
        } catch (error) {
            console.error('Error fetching user posts:', error);
            return [];
        }
    }
}
