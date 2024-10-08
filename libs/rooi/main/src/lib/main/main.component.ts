import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersListContainerComponent} from "@rooi/users/feature-users-list";

@Component({
    selector: "lib-main",
    standalone: true,
    imports: [CommonModule, UsersListContainerComponent],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
