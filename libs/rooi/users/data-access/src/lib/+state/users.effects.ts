import {inject} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {switchMap, catchError, of, map} from "rxjs";
import * as UsersActions from "./users.actions";
import { ApiService } from "@rooi/core/http";

export const userEffects = createEffect(
    () => {
      const actions$ = inject(Actions);
      const apiService = inject(ApiService);
  
      return actions$.pipe(
        ofType(UsersActions.initUsers),
        switchMap(
          () => apiService.get('/users').pipe(
            map(
              (users: any) => UsersActions.loadUsersSuccess({
                users
                // users: users.map(user => usersDTOAdapter.DTOtoEntity(user))
              })
            ),
            catchError((error) => {
              console.error('Error', error);
              return of(UsersActions.loadUsersFailure({ error }));
            })
          )
        ),
      )
    }, { functional: true }
  )
