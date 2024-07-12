import {Router} from 'express';
import MarcaRepository from '../services/marca-service.js';
const router = Router();
const svcc = new MarcaRepository();
router.get('/:user', async (req, res) => {
    let respuesta;
    const userInfo = await svcc.getInfouser(req.params.user);
    if (userInfo != null ){
        respuesta = res.status(200).json(userInfo);
    }
    else {
        respuesta = res.status(500).json([]);
    }
    return respuesta;
});
router.get('/:user/:offset', async (req, res) => {
    let respuesta;
    let userInfo = await svcc.getInfouser(req.params.user)
    if(userInfo.length > 0) {
        const userPosts = await svcc.getPostUser(userInfo[0].id,req.params.offset);
    if (userPosts != null){
        respuesta = res.status(200).json(userPosts);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
    } else {
        respuesta = res.status(500).send('Error interno.');
    }
    
});

export default router;