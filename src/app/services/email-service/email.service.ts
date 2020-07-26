import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {EmailModel} from "../../models/email.model";
import {emailMock} from "../../mocks/email.mock";

@Injectable({
  providedIn: "root"
})
export class EmailService {
  getEmailsByDate(dateFrom: Date, dateTo: Date): Observable<EmailModel[]> {
    let emails: EmailModel[] = emailMock;
    emails = emails.filter(email => {
      const date = email.date;
      return (date >= dateFrom && date <= dateTo);
    });

    return of(emails);
  }
}
