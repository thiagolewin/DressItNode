import { Router } from 'express';
import multer from 'multer';
import ImageService from './../services/image-service.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskStorage
}).fields([
    { name: 'background_url', maxCount: 1 },
    { name: 'garment_url', maxCount: 1 }
]);

const svc = new ImageService();

router.post("/post", fileUpload, async  (req, res) => {
    const garmentUrl = req.body.garment_url;
    const savedFilePath = req.files['background_url'][0].path
    console.log(savedFilePath)
    const response = await fetch(`http://34.16.216.43:8000/?background_url=${savedFilePath}&garment_url=${garmentUrl}`);
    const data = await response.json();
    res.status(200).json({
        message:"Hola",
        fetchResponse : data
    })
});

export default router;
