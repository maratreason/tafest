import {Route} from "@angular/router";

export const appRoutes: Route[] = [
    {path: "", redirectTo: "/main", pathMatch: "full"},
    {path: "main", loadComponent: () => import("@rooi").then(c => c.MainComponent)}
];
