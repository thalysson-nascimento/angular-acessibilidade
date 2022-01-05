import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // forwardRef utilizado quando o token foi declaro, mas ainda não foi definido
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input()
  value: string = null;
  @Input()
  label = '';
  @Output()
  valueChange = new EventEmitter<string>();
  options = YesNoButtonGroupOptions;
  onChange = (value: string) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    // com essa instrução os formulários permanecem usando o databind
    // do angular. Ex: [(value)]
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  activated(value: string): void {
    this.writeValue(value);
    // this.value = value;
    // this.valueChange.emit(this.value);
  }
}
