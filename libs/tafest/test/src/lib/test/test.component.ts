import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {JsonFormData} from "../form/json-form.model";
import {JsonFormComponent} from "../form/json-form.component";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: "lib-test",
  standalone: true,
  imports: [CommonModule, JsonFormComponent, ButtonComponent],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  private readonly http = inject(HttpClient);
  public formData: JsonFormData | any;

  ngOnInit(): void {
    // this.http.get<JsonFormData>("assets/forms/form.json")
    //   .subscribe((formData: JsonFormData) => {
    //     this.formData = formData;
    //     console.log(this.formData);
    //   });
  }

}

// Задача. Сделать динамические формы. Логин, Регистрация. Добавить задачу, телефонную книгу.
// Выводить эти формы динамически из json-файла.
// Добавление новых телефонов. Сделать кнопку, которая рисует динамическую форму для добавления новых телефонов. И кнопка удаления телефонов.
