const {Router} = require('express')
const clientesController = require("../Controller/clientes.controller")
const router = Router()

router.get("/",clientesController.obtenerClientes)
router.post("/",clientesController.crearCliente)
router.put("/:id",clientesController.editarCliente)
router.delete("/:id",clientesController.eliminarCliente)

module.exports = router;