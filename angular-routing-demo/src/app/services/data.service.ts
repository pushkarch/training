import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private message = 'Hello from Angular Service!';

  getMessage() {
    return this.message;
  }
}
