import React from "react";
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";

import './App.css';

import Header from "./Components/Header";
import Tarefas from './Components/Tarefas';
import AddTarefa from './Components/AddTarefa';


const App = () => {
  let [tarefas, setTarefas] = useState([
    {
      id: "1",
      title: "Meditar",
      completed: true,
    },
    {
      id: "2", 
      title: "Limpar a casa",
      completed: false,
    },
    {
      id: "3", 
      title: "Ler",
      completed: false,
    },
    {
      id: "4", 
      title: "Praticar mais programação",
      completed: false,
    }
  ]);

  const handleClickNaTarefa = (tarefaId) => {
      const novasTarefas = tarefas.map((tarefa) => {
        if(tarefa.id === tarefaId) return{...tarefa, completed: !tarefa.completed};
        
        return tarefa;
      });
      setTarefas(novasTarefas);
  };

  const handleAddTarefa = (tarefaTitle) => {
    const novaTarefa=[...tarefas, 
      {
        title: tarefaTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTarefas(novaTarefa);
  };
  
  const handleRemoverTarefa = (tarefaId) => {
    const novaTarefa = tarefas.filter(tarefa => tarefa.id !== tarefaId);
    setTarefas(novaTarefa);
  }

  return (
      <div className="Container">
            <Header />
               <AddTarefa handleAddTarefa={handleAddTarefa}/>
              <Tarefas tarefas={tarefas} handleClickNaTarefa={handleClickNaTarefa} handleRemoverTarefa={handleRemoverTarefa}/>        
      </div>
  );
};

export default App;
