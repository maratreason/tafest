import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "lib-sitebar",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./sitebar.component.html",
    styleUrl: "./sitebar.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SitebarComponent {}
