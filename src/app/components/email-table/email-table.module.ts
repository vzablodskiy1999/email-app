import {NgModule} from "@angular/core";
import {EmailTableComponent} from "./email-table.component";
import {CommonModule} from "@angular/common";
import {EmailViewModule} from "../email-view/email-view.module";

@NgModule({
  declarations: [
    EmailTableComponent
  ],
  imports: [
    CommonModule,
    EmailViewModule
  ],
  exports: [
    EmailTableComponent
  ]
})
export class EmailTableModule {}
