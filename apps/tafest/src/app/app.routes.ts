import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () => import("@tafest/home").then(c => c.HomeComponent),
  },
];
