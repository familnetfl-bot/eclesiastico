import { Router } from 'express';
import { getFeligreses, createFeligres } from '../controllers/feligreses.controller';

const router = Router();

// Rutas base para /api/feligreses
router.get('/', getFeligreses);
router.post('/', createFeligres);

export default router;