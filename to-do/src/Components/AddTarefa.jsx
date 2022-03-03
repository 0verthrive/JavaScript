import React, { useState } from 'react';
import Button from './Button';

import "./addStyle.css";


const AddTarefa = ({handleAddTarefa}) => {
    
    const[dadosDoInput, setDadosDoInput] = useState("");
    
    const handleDadosInput = (e) => {
        setDadosDoInput(e.target.value);
    };

    const handleAcaoDoClick = () => {
        handleAddTarefa(dadosDoInput);
    };

    return (
        <div className="addTContainer">
            <input 
            onChange={handleDadosInput} 
            value={dadosDoInput} 
            className="addTContainer-input" 
            type="text" />
            <div className="buttonAdd">
            <Button onClick={handleAcaoDoClick}>Adicionar</Button>
            </div>
        </div>
        );
};
 
export default AddTarefa;