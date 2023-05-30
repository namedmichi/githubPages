import { Component } from '@angular/core';
import { Bigger } from 'src/app/sites';
@Component({
  selector: 'app-bigger',
  templateUrl: './bigger.component.html',
  styleUrls: ['./bigger.component.css'],
})
export class BiggerComponent {
  $biggerSites: Bigger[] = [
    {
      title: 'namedTask',
      src: 'assets/gitpage-images/namedTask.png',
      description: 'Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/namedTask/',
    },
    {
      title: 'Wo in der Welt',
      src: 'assets/gitpage-images/woinderwelt.png',
      description: 'Erstes Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/angular-test/firstTest/docs/',
    },
    {
      title: 'TOP SECRET',
      src: 'assets/gitpage-images/comingsoon.jpg',
      description: 'Wordpress, React',
      language: 'PHP, JSX',
      livesite: '',
      livesitesrc: '',
    },
  ];
}
