import express from "express";
import cors from "cors";
import UserRouter from "./src/controllers/user-controller.js";
import WearRouter from "./src/controllers/post-controller.js";
import wearScraping from "./src/controllers/scraping-controller.js";
import MarcaRouter from './src/controllers/marca-controller.js';
import imageController from './src/controllers/image-controller.js';

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://dressit.site');  // Permite solicitudes solo desde este origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Permitir métodos OPTIONS (para verificación preflight CORS)
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Rutas de los controladores
app.use("/api/users", UserRouter);
app.use("/api/wear", WearRouter);
app.use("/api/scraping", wearScraping);
app.use("/api/brand", MarcaRouter);
app.use("/api/image", imageController);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
