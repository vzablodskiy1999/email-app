import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {EmailModel} from "../../models/email.model";
import {formatDate, } from "../../utils/date.utils";
import {WindowService} from "../../services/window-service/window.service";
import {Subject} from "rxjs";
import {debounceTime, takeUntil} from "rxjs/operators";

@Component({
  selector: "email-table",
  templateUrl: "./email-table.component.html",
  styleUrls: ["./email-table.component.scss"]
})
export class EmailTableComponent implements OnInit, OnDestroy {
  @Input() emails: EmailModel[];
  sortedBy: string;
  sortReverse: boolean;
  isMobile: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    this.windowService.subscribeOnWindowWidth()
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(100)
      ).subscribe(width => {
        this.checkIsMobile(width);
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkIsMobile(windowWidth: any): void {
    windowWidth < 768 ?
      this.isMobile = true :
      this.isMobile = false;
  }

  formatDate(date: Date): string {
    return formatDate(date);
  }

  formatRecipientString(recipient: string | string[]): string {
    switch (typeof recipient) {
      case "string": {
        return recipient;
      }
      case "object": {
        if (recipient.length === 1) {
          return recipient.toString();
        } else {
          return this.isMobile ? recipient.toLocaleString() : `${recipient[0]}, ...`
        }
      }
    }
  }

  formatRecipientsCount(recipient: string | string[]): string {
    return `+${recipient.length - 1}`
  }

  isMoreThenOneRecipient(recipient: string | string []): boolean {
    return typeof recipient === "object" && recipient.length > 1;
  }

  sortEmails(param: string): void {
    if (this.sortedBy == param) {
      this.sortReverse = !this.sortReverse;
    }
    this.sort(param, this.sortReverse);
    this.sortedBy = param;
  }

  sort(param: string, reverse: boolean): void {
    this.emails.sort((a, b): number => {
      if (a[param] > b[param]) {
        return reverse ? -1 : 1;
      } else if (a[param] < b[param]) {
        return reverse ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  toggleBody(email: EmailModel): void {
    email.collapsed = !email.collapsed;
  }

  get emailsLength(): number {
    return this.emails ? this.emails.length : 0;
  }

  get noEmails(): boolean {
    return this.emailsLength === 0;
  }

  get sortedByFrom(): boolean {
    return this.sortedBy && this.sortedBy === 'from';
  }

  get sortedByTo(): boolean {
    return this.sortedBy && this.sortedBy === 'to';
  }

  get sortedBySubject(): boolean {
    return this.sortedBy && this.sortedBy === 'subject';
  }

  get sortedByDate(): boolean {
    return this.sortedBy && this.sortedBy === 'date';
  }
}
