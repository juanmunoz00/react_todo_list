/* 
    Usé rfc <- [enter] para crear la plantilla del componente gracias al plugin ES7 React/Redux/GraphQL/React-Native snippets
 */
import React from 'react';
import { TodoItem } from './TodoItem';
/* todos se lee "tudús (to do's)" */

export function TodoList({ todos, toggleTodo }) {
    return (
        /* 
            - Agregamos un element key único 
            p/c elemento del arreglo todo.

            - Recibe la propiedada toggleTodo y se la pasa al TodoItem
        */
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
}
