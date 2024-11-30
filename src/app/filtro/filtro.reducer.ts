import { Action,createReducer, on} from "@ngrx/store";
import { setFiltro, filtroValidos } from './filtro.actions';

export const initalFiltroState: filtroValidos = 'todos' as filtroValidos;

export const _filtroReducer = createReducer(
    initalFiltroState,
    on(setFiltro, (state, {filtro}) => filtro),
);

export function filtroReducer(state: filtroValidos | undefined , action: Action<string>) {
    return _filtroReducer(state ,action);
}