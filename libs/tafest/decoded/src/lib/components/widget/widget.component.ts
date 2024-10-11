import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "widget",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./widget.component.html",
    styleUrl: "./widget.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {}
