import {Route} from "@angular/router";

export const appRoutes: Route[] = [
    {path: "", redirectTo: "/main", pathMatch: "full"},
    {path: "main", loadComponent: () => import("@rooi").then(c => c.MainComponent)}
];

// В svg файлах, которые в вёрстке, задавать в fill="currentColor"
// И после уже родителю в css задавать color;