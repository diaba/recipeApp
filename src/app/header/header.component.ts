import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Output() request = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  navigateTo(add: string) {
    this.request.emit(add);
  }
}
