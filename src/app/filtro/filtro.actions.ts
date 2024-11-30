import { createAction, props } from "@ngrx/store";

export type filtroValidos = 'todos' | 'completados' | 'pendientes';
export const setFiltro = createAction('[Filtro] SetFiltro',
    props<{filtro: filtroValidos}>()
)