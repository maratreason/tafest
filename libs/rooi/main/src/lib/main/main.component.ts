import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersListContainerComponent} from "@rooi/users/feature-users-list";
import {XSelectComponent} from "@rooi/kit";

@Component({
    selector: "lib-main",
    standalone: true,
    imports: [CommonModule, UsersListContainerComponent, XSelectComponent],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    // select options
    public readonly cities = ["Казань", "Москва", "Владивосток", "Йошкар-Ола", "Нижний Новгород"];
    public readonly research = ["Исследование 1", "Исследование 2", "Исследование 3"];
    public readonly actions = ["Действие 1", "Действие 2", "Действие 3"];
    public readonly selectShows = ["10", "25", "50"];

}
