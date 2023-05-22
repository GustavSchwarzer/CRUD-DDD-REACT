import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lista } from "../pages/List"
import { Cadastro} from "../pages/Cadastro"
import { Edicao } from "../pages/Edicao";
import { Delete } from "../pages/Delete";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/" element={<Lista />} />
                <Route path="/edicao/:id" element={<Edicao />} />
                <Route path="/delete/:id" element={<Delete />} />
            </Routes>
        </Router>
    );
}