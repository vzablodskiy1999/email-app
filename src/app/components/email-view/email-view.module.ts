import {NgModule} from "@angular/core";
import {EmailViewComponent} from "./email-view.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    EmailViewComponent
  ],
    imports: [
        CommonModule
    ],
  exports: [
    EmailViewComponent
  ]
})
export class EmailViewModule {}
