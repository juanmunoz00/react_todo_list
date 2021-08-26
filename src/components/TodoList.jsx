/* 
    Usé rfc <- [enter] para crear la plantilla del componente gracias al plugin ES7 React/Redux/GraphQL/React-Native snippets
 */
import React from 'react';
import { TodoItem } from './TodoItem';
/* todos se lee "tudús (to do's)" */

export function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </ul>
    );
}
