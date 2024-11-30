import { Action, createReducer, on } from "@ngrx/store";
import { borrar, borrarCompletado, crear, editar, toggle, toggleAll } from "./todo.actions";
import { Todo } from "./models/todo.model";

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('hola'),
    new Todo('hola1'),
    new Todo('hola2'),
    new Todo('hola3')
];

const _todoReducer = createReducer(
    initialState,
    on(crear, (state, {texto})=>[...state, new Todo(texto)]),
    on(toggle, (state, {id}) => {
        return state.map(todo => {
            if (todo.id === id) {
                return{
                    ...todo,
                    completado: !todo.completado
                }  
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, {id, texto}) => {
        return state.map(todo => {
            if (todo.id === id) {
                return{
                    ...todo,
                    texto: texto
                }  
            } else {
                return todo;
            }
        });
    }),
    on(borrar, (state, {id}) => state.filter( todo => todo.id !== id)),
    on(borrarCompletado, (state) => state.filter( todo => !todo.completado)),
    on(toggleAll,(state, {completado}) => state.map( todo => { 
            return {
                ...todo,
                completado: completado
            };
        })
    )
);

export function todoReducer(state: Todo[] | undefined, action: Action<string>) {
    return _todoReducer(state, action);
}