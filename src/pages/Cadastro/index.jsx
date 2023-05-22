import '../../App.css';
import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import api from '../../services/api';

export const Cadastro = () => {

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "titulo": titulo,
            "ativo": false,
            "dataCadastro": "2023-05-15T01:30:24.5805304",
            "dataAlteracao": "2023-05-15T00:24:56.2500819",
            "userId": "9b99d8e5-fd05-42cb-9458-0e95eb7b76c5"
        };

        await api.post("/Add", data);
        alert("Mensagem criado com sucesso!");
        setTitulo("");

        navigate('/');

    };

    return (
        <div className='container' >
            <h1 className='titulo'>Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <input className='input-text' type="text" value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} />

                <button className='btn-criar' type='submit'>
                    Enviar Mensagem
                </button>

                <Link className="btn-voltar" to="/">
                Voltar
                </Link>
            </form>

        </div>

    );


}