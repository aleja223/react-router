import { useState } from "react";
import { usuarioContext } from "./UsuarioContext";

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  return (
    <usuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </usuarioContext.Provider>
  );
};

// const usuario = {
//   nombre: "Aleja León",
//   tecnologia: "React",
//   email: "balby223@gmail.com",
//   redes: "@alejaleon",
// };
