import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "lib-auth-layout",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./auth-layout.component.html",
  styleUrl: "./auth-layout.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}
