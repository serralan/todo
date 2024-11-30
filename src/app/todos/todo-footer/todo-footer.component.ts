import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { Todo } from '../models/todo.model';
import { borrarCompletado } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent  implements OnInit{
  pendientes: number = 0;
  filtroActual: actions.filtroValidos = 'todos';
  filtros: actions.filtroValidos[] = ['todos','completados','pendientes'];
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
/*     this.store.select('filtro').subscribe( filtro => {
      this.filtroActual = filtro;
    }); */
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  changeFilter(filtro: actions.filtroValidos){
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  borrarCompletados(){
    this.store.dispatch(borrarCompletado());
  }
}
