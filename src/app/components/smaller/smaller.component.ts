import { Component } from '@angular/core';
import { Smaller } from 'src/app/sites';
@Component({
  selector: 'app-smaller',
  templateUrl: './smaller.component.html',
  styleUrls: ['./smaller.component.css'],
})
export class SmallerComponent {
  $smallerSites: Smaller[] = [
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
      title: 'Schere Stein Papier',
      src: 'assets/gitpage-images/scheresteinpapier.png',
      description: 'Spiele gegen einen Bot',
      language: 'HTML, CSS, Javascript',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/rock-paper-scissors-master/index.html',
    },
    {
      title: 'Sneaker Produkt Page',
      src: 'assets/gitpage-images/sneaker.png',
      description: 'Funktionierende Shop Seite',
      language: 'HTML, CSS, Javascript',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/ecommerce-product-page-main/index.html',
    },
    {
      title: 'Fake Google',
      src: 'assets/gitpage-images/google.png',
      description: 'Selbstgebauter Klon',
      language: 'HTML, CSS',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/uebungen.23/google/google.html',
    },
    {
      title: ' Web 3.0',
      src: 'assets/gitpage-images/web3.png',
      description: '',
      language: 'HTML, CSS',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/news-homepage-main/index.html',
    },
    {
      title: ' Clipboard',
      src: 'assets/gitpage-images/clipboard.png',
      description: '',
      language: 'HTML, CSS, Javascript',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/clipboard-landing-page-master/index.html',
    },
    {
      title: 'Huddle',
      src: 'assets/gitpage-images/huddle.png',
      description: '',
      language: 'HTML, CSS',
      livesite: 'Vorhanden',
      livesitesrc:
        'https://namedmichi.github.io/workspacestudio/huddle-landing-page-with-alternating-feature-blocks-master/index.html',
    },
  ];
}
