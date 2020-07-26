import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {BsDaterangepickerInlineConfig} from "ngx-bootstrap/datepicker/bs-daterangepicker-inline.config";

@Component({
  selector: 'input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.scss']
})
export class InputDatepickerComponent {
  @Input() disableComponent: boolean = false;
  @Input() datepickerValue: Date[];
  @Output() onDateChange: EventEmitter<Date[]> = new EventEmitter<Date[]>();

  datepickerConfig: Partial<BsDaterangepickerInlineConfig> = {
    dateInputFormat: 'MM/DD/YYYY',
    rangeInputFormat: 'MM/DD/YYYY',
    displayMonths: 1,
    containerClass: 'theme-default',
    adaptivePosition: false
  }

  handleClick(): void {
    this.onDateChange.emit(this.datepickerValue);
  }
}
