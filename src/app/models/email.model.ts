export interface EmailModel {
  from: string,
  to: string | string[],
  subject: string,
  body: string,
  date: Date,
  attachment?: any;
}
