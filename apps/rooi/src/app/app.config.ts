import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app.routes";
import {provideStore, provideState} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import * as fromUsers from "@rooi/users/data-access";
import {userEffects, UsersFacade} from "@rooi/users/data-access";
import { provideHttpClient } from "@angular/common/http";
import { API_URL } from "@rooi/core/http";
import { environment } from "../environments/environment.development";

export const appConfig: ApplicationConfig = {
    providers: [
        provideEffects(userEffects),
        provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
        UsersFacade,
        provideEffects(),
        provideStore(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes),
        provideHttpClient(),
        {
            provide: API_URL,
            useValue: environment.api_url,
        }
    ],
};
