import { Router } from 'express';
import { createUser, listarUsuarios, deletarUsuario, atualizarUsuario } from './controllers/userController.js';

const router = Router();

router.post('/cadastro', createUser);
router.get('/', listarUsuarios);
router.delete('/:id', deletarUsuario);
router.put('/:id', atualizarUsuario);

export default router;
