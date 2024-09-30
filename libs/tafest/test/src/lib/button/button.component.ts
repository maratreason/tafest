import {ChangeDetectionStrategy, Component, ElementRef, signal} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: "taf-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[attr.btn]': 'isActive',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(click)': 'updateValue($event)',
  },
})
export class ButtonComponent {
  type: string;

  constructor(private elementRef: ElementRef) {
    this.type = this.elementRef.nativeElement.getAttribute("btn");
  }

  value: number = 0;
  disabled: boolean = false;
  isActive = false;
  updateValue(event: KeyboardEvent) {
    this.value = 18;
    this.isActive = !this.isActive;
    this.type = this.isActive ? "success" : "btn"
  }
}
