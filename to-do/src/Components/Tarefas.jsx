import React from 'react';
import Tarefa from './Tarefa';

const Tarefas = ({tarefas, handleClickNaTarefa, handleRemoverTarefa}) => {
    return (
        <>
            {tarefas.map(tarefa => 
            <Tarefa
            key={tarefa.id} 
            tarefa={tarefa} 
            handleClickNaTarefa={handleClickNaTarefa}
            handleRemoverTarefa={handleRemoverTarefa}/>)}
        </>
     );
}
 
export default Tarefas;