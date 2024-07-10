import { Router } from 'express';
import multer from 'multer';
import ImageService from './../services/image-service.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const validateImageMiddleware = (req, res, next) => {
    const backgroundFile = req.files['background_url'][0];
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif']; // Definir tipos MIME permitidos para imágenes
    
    if (!allowedMimes.includes(backgroundFile.mimetype)) {
        return res.status(400).json({ error: 'El archivo de fondo no es una imagen válida' });
    }

    // Si pasa la validación, continuar con el siguiente middleware
    next();
};
const fileUpload = multer({
    storage: diskStorage
}).fields([
    { name: 'background_url', maxCount: 1 },
    { name: 'garment_url', maxCount: 1 }
]);

const svc = new ImageService();

router.post("/post", validateImageMiddleware,fileUpload, async  (req, res) => {
    try {
        const garmentUrl = req.body.garment_url;
        const backgroundFile = req.files['background_url'][0];
        const backgroundFileName = backgroundFile.filename;
        // Realizar la petición fetch y esperar la respuesta
        const response = await fetch(`http://34.16.216.43:8000/?background_url=https://dressitnode-uq2eh73iia-uc.a.run.app/images/${backgroundFileName}&garment_url=${garmentUrl}`)

        if (response.ok) {
            const contentType = response.headers.get('content-type');
            res.setHeader('Content-Type', contentType);
            const buffer = await response.arrayBuffer();
            res.end(Buffer.from(buffer));
        } else {
            throw new Error(`Fetch failed with status ${response.status}`);
        }
    } catch (error) {
        // Capturar cualquier error y devolver un mensaje de error al cliente
        console.error('Error in fetch:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
