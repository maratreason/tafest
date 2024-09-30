import {Route} from "@angular/router";

export const appRoutes: Route[] = [
    {path: "", redirectTo: "auth/login", pathMatch: "full"},
    {path: "auth", loadComponent: () => import("@home-money/feature-auth").then(c => c.AuthLayoutComponent), children: [
        {path: "login", loadComponent: () => import("@home-money/feature-login").then(c => c.LoginComponent)},
        {path: "register", loadComponent: () => import("@home-money/feature-register").then(c => c.RegisterComponent)},
    ]},
    
];
