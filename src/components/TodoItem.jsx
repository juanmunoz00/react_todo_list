/* 
    Usé rfc <- [enter] para crear la plantilla del componente gracias al plugin ES7 React/Redux/GraphQL/React-Native snippets
 */
import React from 'react'

export function TodoItem({ todo }) {
    /* Deconstructing: el arreglo todo se descompone en sus "dimensiones" */
    const { id, task, completed } = todo;
    /* Mostramos la dimension id */
    return <li>{task}</li>
}
