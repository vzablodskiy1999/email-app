import {NgModule} from "@angular/core";
import {InputDatepickerComponent} from "./input-datepicker.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    InputDatepickerComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    InputDatepickerComponent
  ]
})
export class InputDatepickerModule {
}
