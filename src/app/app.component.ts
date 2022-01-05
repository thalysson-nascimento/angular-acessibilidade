import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'a11y-p1';
  yesNoAnswer: string = null;
  formGroup: FormGroup = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFormBuilder();
  }

  createFormBuilder() {
    this.formGroup = this.formBuilder.group({
      yesNoAnswer: ['no'],
    });
  }

  submit(): void {
    console.log(this.formGroup.value);
  }
}
