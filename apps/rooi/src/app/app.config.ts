import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app.routes";
import {provideStore, provideState} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import * as fromUsers from "@rooi/users/data-access";
import {userEffects, UsersFacade} from "@rooi/users/data-access";

export const appConfig: ApplicationConfig = {
    providers: [
        provideEffects(userEffects),
        provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
        UsersFacade,
        provideEffects(),
        provideStore(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes),
    ],
};
