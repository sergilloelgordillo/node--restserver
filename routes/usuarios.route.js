const {Router} = require('express');
const {usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPath,} = require('../controllers/usuarios.controllers');
const router = Router();

router.get('/',usuariosGet);
router.put('/:id',usuariosPut);
router.post('/',usuariosPost);
router.delete('/',usuariosDelete);
router.patch('/',usuariosPath);

module.exports = router