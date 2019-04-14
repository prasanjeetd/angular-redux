import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState, INITIAL_STATE } from './store';
import { reducer } from './reducer';

import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import {
  createStore,
  applyMiddleware,
  Middleware,
  Store,
  combineReducers,
  compose,

} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './rootReducer';
import { rootEpic } from './epic';
import { pingEpic } from './epics/epic';
import { configureStore } from './configure-store';

const epicMiddleware = createEpicMiddleware();

/* export const store: Store<IAppState> = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
); */

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {

    ngRedux.configureStore(reducer, INITIAL_STATE);
    // configureStore(ngRedux);

    // ngRedux.provideStore(store);

    // const epicMiddleware = createEpicMiddleware();

    /*  const epicMiddleware = createEpicMiddleware(pingEpic );
 
 
     const middleware: Middleware[] = [epicMiddleware];
 
     ngRedux.configureStore(rootReducer, INITIAL_STATE, middleware);
 
      */

    //  epicMiddleware.run(rootEpic);

  }

}
