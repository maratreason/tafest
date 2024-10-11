import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "x-option",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./x-option.component.html",
    styleUrl: "./x-option.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XOptionComponent {
    @Input({required: true})
    public option!: string;

    @Output() setCurrentOption = new EventEmitter<string>();

    public updateCurrentOption(option: string) {
        this.setCurrentOption.emit(option);
    }
}
