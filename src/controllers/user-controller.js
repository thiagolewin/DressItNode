import {Router} from 'express';
import UserService from './../services/user-service.js';
const router = Router();
const svc = new UserService();

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllSync();
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});

export default router;