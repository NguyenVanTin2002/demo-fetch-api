// lib/store.ts
import { loadBindings } from 'next/dist/build/swc';
import { create } from 'zustand';
import axios from 'axios';


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    
    
}

interface State {
    todos: Todo[];
    loading: boolean;
    error: boolean;
}

interface Action{
    fetchTodos: () => void;
}

export const useTodo = create<State & Action>((set) => ({
    todos: [],
    loading: true,
    error: false,
    fetchTodos: async () => {
        try {
            //const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
            const data = await response.data;

            set({ todos: data, loading: false });
            
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    },
}));
