import { AfterViewInit, Component } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ecommerce-shf';
  ngAfterViewInit() {
    Feather.replace();
  }
}
