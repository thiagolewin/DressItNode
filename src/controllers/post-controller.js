import {Router} from 'express';
import PostService from '../services/post-service.js';
import CommonService from '../services/marca-service.js';
import Wear from '../entities/user.js'
const router = Router();
const svcw = new PostService();
const svcc = new CommonService();

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svcw.getFilterAsync(req.query.generos,req.query.precios,req.query.colores,req.query.prendas,req.query.offset,req.query.limit);
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
    const returnArray = await svcw.getByIdAsync("Posts",req.params.id);
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});

router.get('/brand/:id', async (req, res) => {
    let respuesta;
    const returnArray = await svcw.getPostByBrand(req.params.id);
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

router.get('/search/:buscado', async (req, res) => {
    let respuesta;
    const returnArray = await svcw.getSearchAsync(req.params.buscado);
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});svcc

export default router;