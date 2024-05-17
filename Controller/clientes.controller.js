const Clientes = require("../Models/clientes.models")

// Obtener
const obtenerClientes = async(req,res) =>{
    try{
        const listaClientes = await Clientes.findAll();
        res.json(listaClientes)
    }
    catch (error) {
        console.error("Error al obtener los clientes:", error);
        res.status(500).json({ mensaje: "Ocurrió un error al tratar de obtener clientes." });
    }
}


// Crear
const crearCliente = async (req,res) =>{
    try{
        const {cedula,nombre,apellido,telefono,direccion} = req.body;
        const nuevoCliente = await Clientes.create(
            {
                cedula,nombre,apellido,telefono,direccion
            }
        )
        res.status(201).json({mensaje:"god"})

    }
    catch (error) {
        console.error("Error al crear el cliente:", error);
        res.status(500).json({ mensaje: "Ocurrió un error al tratar de crear el cliente." });
    }

} 


// Editar
const editarCliente = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del cliente a editar desde los parámetros de la solicitud
        const { cedula, nombre, apellido, telefono, direccion } = req.body; // Obtener los nuevos datos del cliente desde el cuerpo de la solicitud

        // Buscar el cliente por ID
        const cliente = await Clientes.findByPk(id);

        // Si el cliente no existe, retornar un error 404
        if (!cliente) {
            return res.status(404).json({ mensaje: "Cliente no encontrado." });
        }

        // Actualizar los datos del cliente
        cliente.cedula = cedula;
        cliente.nombre = nombre;
        cliente.apellido = apellido;
        cliente.telefono = telefono;
        cliente.direccion = direccion;

        // Guardar los cambios en la base de datos
        await cliente.save();

        // Retornar una respuesta exitosa
        res.json({ mensaje: "Cliente actualizado correctamente." });
    } catch (error) {
        console.error("Error al editar el cliente:", error);
        res.status(500).json({ mensaje: "Ocurrió un error al tratar de editar el cliente." });
    }
}

// Eliminar
const eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del cliente a eliminar desde los parámetros de la solicitud

        // Buscar el cliente por ID
        const cliente = await Clientes.findByPk(id);

        // Si el cliente no existe, retornar un error 404
        if (!cliente) {
            return res.status(404).json({ mensaje: "Cliente no encontrado." });
        }

        // Eliminar el cliente de la base de datos
        await cliente.destroy();

        // Retornar una respuesta exitosa
        res.json({ mensaje: "Cliente eliminado correctamente." });
    } catch (error) {
        console.error("Error al eliminar el cliente:", error);
        res.status(500).json({ mensaje: "Ocurrió un error al tratar de eliminar el cliente." });
    }
}

module.exports = {
    obtenerClientes,
    crearCliente,
    editarCliente,
    eliminarCliente
}



