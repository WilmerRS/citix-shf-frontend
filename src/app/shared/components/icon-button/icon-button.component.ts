import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon!: string;
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit();
  }

}
