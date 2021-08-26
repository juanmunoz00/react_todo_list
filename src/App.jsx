/* 
    El useState es un objeto de tipo estado que almacena las propiedades de los componentes.
    Cuándo el estado del objeto cambia el componente se re-renderiza.

    Para que funcione con componentes...
    
    - Asignarle un evento onClick al botón de agregar.
    - Agregar un ref al elmento HTML de input llamado todoTaskRef
    - Agregar un hook llamado useRef.
        - El manejador handleTodoAdd toma el valor por referencia del elemento input.
        y lo almacena en task
        - Si task está vacío, se sale de la función (no hace nada).
        - Si task no está  vacío, modifica el estado del arreglo todos
            a través de la función setTodos.
        - Instalar una libreria llamada uuid que genera IDs unicos.
        - Importar el método v4 de la libreria uuid y nombrarla uuidv4.

    - 

*/ 
import React, { Fragment, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
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

    const todoTaskRef = useRef();

    /*
        - Recibe el id del elemento.
        - Crea una copia del arreglo todos.
        - En la copia busca el elemento por el id.
        - Complementa (niega) el valor.
        - Cambia el estado del arreglo todos con la nueva copia.

    */
    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;

        if( task === '' ) return;

        /* 
            Crea una copia del estado en prevTodos con el "spreit" operator.
            Agrega el nuevo estado a todos.
        */
        setTodos(
            (prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]

        });

        /* "Resetea" el valor que se capturó en el input */
        todoTaskRef.current.value = null;

    };

    /* 
        - Agregamos otra propiedad, toggleTodo, al arreglo todos.
        - Después de los botones agregamos un div para mostrar
            el contador de tareas que faltan por completarse.
            - Se usa un filtro para el arreglo todo
                donde busca qué elementos tienen un estado
                completed = false y los cuenta (len).
    */
    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>
            <button onClick={handleTodoAdd}>➕</button>
            <button>🗑</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>

        </Fragment>

    )
    
}