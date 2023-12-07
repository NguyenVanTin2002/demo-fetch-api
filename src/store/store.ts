// lib/store.ts
import { create } from 'zustand';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface State {
    todos: Todo[];
    fetchTodos: () => void;
}

export const useStore = create<State>((set) => ({
    todos: [],
    fetchTodos: async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            const todosArray = Array.isArray(data) ? data : [data];
            set({ todos: todosArray });
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    },
}));
