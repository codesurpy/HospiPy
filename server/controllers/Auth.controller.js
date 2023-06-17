// Importar modelo de usuario aqui
import bcrypt from "bcryptjs";
import User from "../models/User.model";
import { generateJWT } from "../utils/generateJWT.js";


export const login = async (req, res) => {
  const { document, password } = req.body;
  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ document });
    if (!user){
      return res.status(404).json({
        message: "El usuario o contraseña son incorrectos",
      });
    }

    // Verificar si el usuario esta activo
    if (!user.status) {
      return res.status(400).json({
        message: "El usuario esta desactivado",
      });
    }
    // Verificar contraseña
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "El usuario o contraseña son incorrectos",
      });
    }

    // Generar el token
    const token = await generateJWT(user._id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error hablar con el administrador",
    });
  }
};
