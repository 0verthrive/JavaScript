import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';
import './DetalhesTarefa.css';

const DetalhesTarefa = () => {
    const params = useParams();
    const history = useNavigate();

    const handleClickDeVoltar = () => {
        history('/');
    }

    return ( 
        <>
        <div className="Container">
            <div className="buttonVoltar">
                <Button onClick={handleClickDeVoltar}>Voltar</Button>
            </div>
            <div className="Detalhes">
                <h2>{params.tarefaTitle}</h2>
                <p>Descrição</p>
                <p>Aconchego não lhe levará à lugar algum!</p>
            </div>
        </div>
        </>
    );
}
 
export default DetalhesTarefa;