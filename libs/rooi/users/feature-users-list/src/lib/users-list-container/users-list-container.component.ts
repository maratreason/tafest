import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "lib-users-list-container",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./users-list-container.component.html",
    styleUrl: "./users-list-container.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListContainerComponent {}
