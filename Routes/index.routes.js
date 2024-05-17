const { Router } = require("express");
const clienteRoute = require("./clientes.routes")
const router = Router();

router.use("/clientes",clienteRoute)


module.exports = router;


