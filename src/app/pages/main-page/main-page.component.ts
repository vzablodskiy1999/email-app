import {Component, OnDestroy, OnInit} from "@angular/core";
import {EmailService} from "../../services/email-service/email.service";
import {EmailModel} from "../../models/email.model";
import {Subject} from "rxjs";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  selectedDates: Date[];
  isLoading: boolean = false;
  emails: EmailModel[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private emailService: EmailService
  ) {
  }

  ngOnInit(): void {
    this.setSelectedDates();
    this.emailService.getEmailsByDate(this.selectedDates[0], this.selectedDates[1]).subscribe(emails => {
      this.emails = emails;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setSelectedDates(): void {
    const startDate = new Date(2019, 3, 23);
    const endDate = new Date();

    this.selectedDates = [startDate, endDate];
  }

  updateSelectedDate(event: Date[]): void {
    this.selectedDates = event;
    this.emailService.getEmailsByDate(this.selectedDates[0], this.selectedDates[1]).subscribe(emails => {
      this.emails = emails;
    });
  }
}
