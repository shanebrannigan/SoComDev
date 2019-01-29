export class Event {

  img: string;
  title: string;
  info: string;
  locale: string;
  date: string;
  guestFee: number;
  static fromJson(obj: any): Event {
    const result = new Event();
    result.img = obj.img;
    result.title = obj.title;
    result.info = obj.info;
    result.locale = obj.locale;
    result.date = obj.date;
    result.guestFee = obj.guestFee;
    return result;
  }
}
