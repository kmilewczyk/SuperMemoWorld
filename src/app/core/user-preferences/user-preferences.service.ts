import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private offlineModeSubject = new BehaviorSubject(!!localStorage.getItem('offlineMode'));

  get offlineMode() {
    return this.offlineModeSubject.value;
  }

  set offlineMode(value: boolean) {
    if (value) {
      localStorage.setItem('offlineMode', value.toString());
    } else {
      localStorage.removeItem('offlineMode');
    }

    this.offlineModeSubject.next(value);
  }

  get offlineMode$() {
    return this.offlineModeSubject.asObservable();
  }

  toggleOfflineMode() {
    this.offlineMode = !this.offlineMode;
  }
}
