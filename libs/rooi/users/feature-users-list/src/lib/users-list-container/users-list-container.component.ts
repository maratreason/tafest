import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PushPipe} from "@ngrx/component";
import {map} from "rxjs";
import {UsersEntity, UsersFacade} from "@rooi/users/data-access";
import {UsersListComponent} from "../users-list/users-list.component";
import {UsersListVM} from "../users-list/users-list-vm";

@Component({
    selector: "users-list-container",
    standalone: true,
    imports: [CommonModule, UsersListComponent, PushPipe],
    templateUrl: "./users-list-container.component.html",
    styleUrl: "./users-list-container.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListContainerComponent {
    private readonly usersFacade = inject(UsersFacade);
    public readonly users$ = this.usersFacade.allUsers$.pipe(map<UsersEntity[], UsersListVM>((users: UsersEntity[]) => ({users})));

    constructor() {
        this.usersFacade.init();
    }
}
