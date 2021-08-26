/* 
    Usé rfc <- [enter] para crear la plantilla del componente gracias al plugin ES7 React/Redux/GraphQL/React-Native snippets
 */
import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
    /* Deconstructing: el arreglo todo se descompone en sus "dimensiones" */
    const { id, task, completed } = todo;
    /* Mostramos la dimension id */
    
    /* 
        - Agregamos un checkbox a c/elemento de todo.
        - Recibe la propiedad toggleTodo.
            - Agregamos el evento onChange que le pasa el
                id del elmento "clickeado".
            - El estado del checkbox va ser manejado por la propiedad
                completed del arreglo todo.
    */
    
    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return <li>
                <input type="checkbox" 
                    checked={completed}
                    onChange={handleTodoClick}
                />
                {task}
            </li>
}
