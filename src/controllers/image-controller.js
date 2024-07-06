import {Router} from 'express';
import multer from 'multer';
import ImageService from './../services/image-service.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req,file,cb)=> {
        cb(null,Date.now() + "-" + file.originalname)
    }
})
const fileUpload = multer({
    storage: diskStorage
}).single('image')
const svc = new ImageService();
router.post("/post",fileUpload,(req,res)=> {
    console.log(req.file)
})
export default router