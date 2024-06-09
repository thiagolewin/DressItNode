import fs from 'fs'
import {Router} from 'express';
const router = Router();
router.get('', (req, res) => {
    // Obtener offset y límite de la consulta
    const offset = parseInt(req.query.offset) || 0;
    const limite = parseInt(req.query.limit) || 30;
    console.log(req.query)
    // Cargar el archivo JSON
    const archivoJSON = './src/remerasNike.json';
    let data = JSON.parse(fs.readFileSync(archivoJSON, 'utf8'));
    data = data.filter(element => !(element==null));
    // Devolver los datos según el offset y el límite
    const resultado = data.slice(offset, offset + limite);
    setTimeout(() => {
        res.json(resultado);
    }, 1000);
});
export default router