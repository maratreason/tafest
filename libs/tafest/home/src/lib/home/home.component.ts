import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: "lib-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public imageUrl = "assets/images/main/main.jpeg"
  public bannerImageUrl = "assets/images/main/main-2.jpeg"
}
