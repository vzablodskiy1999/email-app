import {NgModule} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";
import {InputDatepickerModule} from "../components/input-datepicker/input-datepicker.module";
import {EmailTableModule} from "../components/email-table/email-table.module";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    InputDatepickerModule,
    EmailTableModule
  ]
})
export class PagesModule {}
