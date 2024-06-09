import {Router} from 'express';
import WearService from './../services/wear-service.js';
import CommonService from './../services/common-service.js';
import Wear from '../entities/user.js'
const router = Router();
const svcw = new WearService();
const svcc = new CommonService();

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svcw.getFilterAsync(req.body.generos,req.body.precios,req.body.colores,req.body.prendas,req.body.offset,req.body.limit);
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});

router.get('/:id', async (req, res) => {
    let respuesta;
    const returnArray = await svcc.getByIdAsync("Wears",req.params.id);
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});

router.post('', async (req, res) => {
    let respuesta;
    let user = new User(undefined,req.body.username, req.body.password, req.body.email, req.body.pfp, req.body.gender)
    const returnArray = await svc.createAsync(user);
    if(returnArray == 1){
        respuesta = res.status(200).send('Se ha creado correctamente');
    }else{
        respuesta = res.status(500).send('Error interno.');
    }
})

export default router;