import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "lib-x-select",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./x-select.component.html",
    styleUrl: "./x-select.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XSelectComponent {}
