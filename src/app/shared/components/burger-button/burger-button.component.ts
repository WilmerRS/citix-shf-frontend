import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss']
})
export class BurgerButtonComponent implements OnInit {
  @Output() handleClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.handleClick.emit('click');
  }

}
