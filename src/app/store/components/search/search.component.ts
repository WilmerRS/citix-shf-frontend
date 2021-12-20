import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    Feather.replace();
  }
}
