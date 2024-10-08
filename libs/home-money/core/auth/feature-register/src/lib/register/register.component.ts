import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: "lib-register",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
