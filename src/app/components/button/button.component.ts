import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() buttonType: 'submit' | 'reset' | 'button' = 'button'

}
