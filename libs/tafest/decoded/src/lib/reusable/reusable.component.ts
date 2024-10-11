import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import { WidgetComponent } from "../components/widget/widget.component";
import { WidgetContentComponent } from "../components/widget/widget-content.component";

@Component({
    selector: "reusable",
    standalone: true,
    imports: [CommonModule, WidgetComponent, WidgetContentComponent],
    templateUrl: "./reusable.component.html",
    styleUrl: "./reusable.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReusableComponent {}
