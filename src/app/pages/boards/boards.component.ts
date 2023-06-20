import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;

  blocks = [
    { color: 'w-full px-4 py-2 rounded text-white font-bold h24 bg-sky-700', description: "Board 1" },
    { color: 'bg-green-700', description: "Board 2" },
    { color: 'bg-amber-700', description: "Board 3" },
    { color: 'bg-indigo-700', description: "Board 4" }
  ]

}
