import {ChangeDetectionStrategy, Component, inject, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JsonFormControls, JsonFormData} from "./json-form.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: "json-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./json-form.component.html",
  styleUrl: "./json-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent implements OnChanges, OnInit {
  private readonly fb = inject(FormBuilder);
  public readonly myForm: FormGroup = this.fb.group({});

  @Input()
  public jsonFormData: JsonFormData = {controls: []};

  ngOnInit(): void {
    // this.createForm(this.jsonFormData.controls);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("json-form: ", this.jsonFormData)
    if (this.jsonFormData && !changes['jsonFormData'].firstChange) {
      if (this.jsonFormData.controls.length > 0) {
        this.createForm(this.jsonFormData.controls);
      }
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }

      this.myForm.addControl(control.name, this.fb.control(control.value, validatorsToAdd));
    }
  }

  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }
}
