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
  {
    path: "search",
    loadComponent: () => import("@tafest/search").then(c => c.SearchComponent),
  },
  {
    path: "test",
    loadComponent: () => import("@tafest/test").then(c => c.TestComponent),
  },
];
