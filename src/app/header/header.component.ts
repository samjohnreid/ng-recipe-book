import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() emitEvent = new EventEmitter();

  toggleContent(value: string) {
    this.emitEvent.emit(value);
  }

}
