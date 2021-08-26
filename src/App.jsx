/* 
    El useState es un objeto de tipo estado que almacena las propiedades de los componentes.
    Cuándo el estado del objeto cambia el componente se re-renderiza.
*/ 
import React, { Fragment, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() { 
    /* 
        Creamos una constante de tipo arreglo que almacena el estado :
        1) El estado
        2) La función que modifica el estado (setState)    
    */
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1", completed: false}, 

    ]);

    return (
        <Fragment>
            <TodoList todos={todos} />
            <input type="text" placeholder="Nueva Tarea"></input>
            <button>➕</button>
            <button>🗑</button>

        </Fragment>

    )
    
}