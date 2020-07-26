import {Injectable} from "@angular/core";
import {fromEvent, Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WindowService {
  subscribeOnWindowWidth(): Observable<any> {
    return fromEvent(window, 'resize')
      .pipe(
        map(event => (event.target as Window).innerWidth),
        startWith(window.innerWidth)
      )
  }
}
