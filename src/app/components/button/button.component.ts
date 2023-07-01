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
      success: 'bg-success-700 hover:bg-success-800 focus:ring-success-300 text-white',
      danger: 'bg-danger-700 hover:bg-danger-800 focus:ring-danger-300 text-white',
      primary: 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 text-white',
      secondary: 'bg-secondary-200 hover:bg-secondary-400 focus:ring-secondary-300 text-white',
      grayLight: 'bg-grayLight-200 hover:bg-grayLight-500 focus:ring-grayLight-50 text-gray-700',

    }
    return colorsList[this.color];
  }

}
