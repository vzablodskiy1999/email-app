import {Component, HostBinding} from "@angular/core";
import {EmailModel} from "../../models/email.model";
import {getMonthNameFromNumber} from "../../utils/date.utils";

@Component({
  selector: 'email-view',
  templateUrl: './email-view.component.html',
  styleUrls: ['./email-view.component.scss']
})
export class EmailViewComponent {
  @HostBinding('hidden') isHidden: boolean = true;
  email: EmailModel;

  hide() {
    this.isHidden = true;
  }

  show(email: EmailModel) {
    this.isHidden = false;
    this.email = email;
  }

  get from(): string {
    return this.email?.from;
  }

  get to(): string {
    return this.email?.to.toLocaleString().split(',').join(', ');
  }

  get subject(): string {
    return this.email?.subject;
  }

  get body(): string {
    return this.email?.body;
  }

  get when(): string {
    const date = this.email?.date;
    return date && `${getMonthNameFromNumber(date.getMonth())} ${date.getDate()} ${date.getFullYear()}`
  }

  get withAttachment(): boolean {
    return !!this.email?.attachment;
  }
}
