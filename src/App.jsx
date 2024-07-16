import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./routes/components/NavBar";
import { HomeScreen } from "./routes/HomeScreen";
import { AbautScreen } from "./routes/AbautScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { UsuarioProvider } from "./routes/context/UsuarioProvider";
import { LoginScreen } from "./routes/context/LoginScreen";

export const App = () => {
  return (
    <UsuarioProvider>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/about" element={<AbautScreen></AbautScreen>}></Route>
        <Route
          path="/contact"
          element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </UsuarioProvider>
  );
};
