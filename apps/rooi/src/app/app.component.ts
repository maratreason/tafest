import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeaderComponent, SitebarComponent} from "@rooi/layout"

@Component({
    standalone: true,
    imports: [RouterModule, HeaderComponent, SitebarComponent],
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "rooi";
}
