import {ChangeDetectionStrategy, Component, ElementRef, inject, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {XOptionComponent } from "../x-option/x-option.component";

@Component({
    selector: "x-select",
    standalone: true,
    imports: [CommonModule, XOptionComponent],
    templateUrl: "./x-select.component.html",
    styleUrl: "./x-select.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        "[class.is--active]": "isActive",
        "(click)": "updateValue()",
    },
})
export class XSelectComponent {
    private parentRef = inject(ElementRef);
    public isActive = false;
    
    @Input({required: true})
    value!: string;
    
    @Input({required: true})
    options!: string[];
    
    public readonly classes = this.parentRef.nativeElement.getAttribute("class");
    public currentOption = this.value;

    public updateValue() {
        this.isActive = !this.isActive;
    }

    public setOption(value: string) {
        this.currentOption = value;
    }
}
