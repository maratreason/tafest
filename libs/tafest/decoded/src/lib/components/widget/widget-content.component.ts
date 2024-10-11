import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "widget-content",
    standalone: true,
    imports: [CommonModule],
    template: `
        <p>Some Content</p>
        <i style="font-size: 40px;">&#9925;</i>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetContentComponent {}
