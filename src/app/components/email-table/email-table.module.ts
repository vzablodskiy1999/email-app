import {NgModule} from "@angular/core";
import {EmailTableComponent} from "./email-table.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    EmailTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmailTableComponent
  ]
})
export class EmailTableModule {}
