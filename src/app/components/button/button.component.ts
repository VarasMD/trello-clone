import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() buttonType: 'submit' | 'reset' | 'button' = 'button';
  @Input() color: string = "primary";

  get colors(): string {
    const colorsList : { [key: string]: string } = {
      success: 'bg-success-700 hover:bg-success-800 focus:ring-success-300',
      danger: 'bg-red-700 hover:bg-red-800 focus:ring-red-300',
      primary: 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300',

    }
    return colorsList[this.color];
  }

}
