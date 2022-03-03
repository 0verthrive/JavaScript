import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useNavigate} from 'react-router';

import "./tarefa.css";

const Tarefa = ({tarefa, handleClickNaTarefa, handleRemoverTarefa}) => {
        const history = useNavigate();

        const handleClickDetalhes = () =>{
            history(`/${tarefa.title}`);
        }

    return (
        <div className="tContainer" style={tarefa.completed ? { borderLeft: "6px solid #FF1493" } : {}}>
            <div className="titulos" onClick={() => handleClickNaTarefa(tarefa.id)}>
            {tarefa.title}
            </div>
            <div className="buttonContainer">
                <button className="detalhaTarefa" onClick={handleClickDetalhes}>
                    <CgInfo/>    
                </button>
                <button className="removerTarefa" onClick={() => handleRemoverTarefa(tarefa.id)}>
                    <CgClose/>    
                </button>
            </div>
        </div>
      );
    };
 
export default Tarefa;