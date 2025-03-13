import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message: string = '';

  constructor(private dataService: DataService) {
    this.message = this.dataService.getMessage();
  }
}
