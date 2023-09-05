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
      title: 'SEO Content',
      src: 'assets/gitpage-images/SEOContent.png',
      description: 'Wordpress Plugin der SEO Küche',
      language: 'PHP, JS/JSX, HTML, SCSS',
      livesite: '',
      livesitesrc: 'https://github.com/namedmichi/SEO-Content',
      aufgaben: 'Chefentwickler und Maintainer',
    },
    {
      title: 'namedTask',
      src: 'assets/gitpage-images/namedTask.png',
      description: 'Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedtask.michael-selbertinger.de',
    },
  ];
}
