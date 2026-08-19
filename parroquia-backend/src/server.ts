import express from 'express';
import cors from 'cors';
import feligresesRoutes from './routes/feligreses.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/feligreses', feligresesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de la Parroquia corriendo en http://localhost:${PORT}`);
});