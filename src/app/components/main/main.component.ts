import { Component, NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { Bigger } from 'src/app/sites';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  sites: Bigger[] = [
    {
      title: 'SEO Content',
      src: 'assets/gitpage-images/SEOContent.png',
      description: 'Wordpress Plugin der SEO Küche',
      language: 'PHP, JS/JSX, HTML, SCSS',
      livesite: '',
      livesitesrc: '#',
      aufgaben: 'Chefentwickler und Maintainer',
    },
    {
      title: 'namedTask',
      src: 'assets/gitpage-images/namedTask.png',
      description: 'Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/namedTask/',
    },
  ];

  view: [number, number] = [600, 400];
  htmlChars: string = '0';
  htmlWords: string = '0';
  htmlLines: string = '0';
  cssChars: string = '0';

  cssWords: string = '0';

  cssLines: string = '0';

  jsChars: string = '0';

  jsWords: string = '0';

  jsLines: string = '0';

  tsChars: string = '0';

  tsWords: string = '0';

  tsLines: string = '0';
  charsTotal: number = 0;

  wordsTotal: number = 0;

  linesTotal: number = 0;
  getChartData() {
    var counterText;
    var html;
    var css;
    var js;
    var ts;
    var jsLines;
    fetch('assets/CounterFile.txt')
      .then((response) => response.text())
      .then((text) => (counterText = text))
      .then((text) => {
        counterText = counterText.split(';');
        console.log(counterText);
        console.log(typeof counterText);
        var lenght = counterText.length;
        html = counterText[lenght - 7];
        css = counterText[lenght - 6];
        js = counterText[lenght - 5];
        ts = counterText[lenght - 4];

        console.log(html);
        html = html.split(' ');
        css = css.split(' ');
        js = js.split(' ');
        ts = ts.split(' ');
        console.log(css[0].substring(1));
        console.log(js);
        this.htmlChars = html[0];
        this.htmlWords = html[3];
        this.htmlLines = html[6];
        this.cssChars = css[0].substring(1);
        this.cssWords = css[3];
        this.cssLines = css[6];
        this.jsChars = js[0].substring(1);
        this.jsWords = js[3];
        this.jsLines = js[6];
        this.tsChars = ts[0].substring(1);
        this.tsChars = ts[0];
        this.tsWords = ts[3];
        this.tsLines = ts[6];
        this.charsTotal =
          parseInt(this.htmlChars) +
          parseInt(this.cssChars) +
          parseInt(this.jsChars) +
          parseInt(this.tsChars);
        this.wordsTotal =
          parseInt(this.htmlWords) +
          parseInt(this.cssWords) +
          parseInt(this.jsWords) +
          parseInt(this.tsWords);

        this.linesTotal =
          parseInt(this.htmlLines) +
          parseInt(this.cssLines) +
          parseInt(this.jsLines) +
          parseInt(this.tsLines);

        var Zeichendaten = [
          {
            name: 'HTML',
            value: this.htmlChars,
          },
          {
            name: 'CSS',
            value: this.cssChars,
          },
          {
            name: 'Javascript',
            value: this.tsChars,
          },
          {
            name: 'Typescript',
            value: this.tsChars,
          },
        ];
        var Woerterdaten = [
          {
            name: 'HTML',
            value: this.htmlWords,
          },
          {
            name: 'CSS',
            value: this.cssWords,
          },
          {
            name: 'Javascript',
            value: this.tsWords,
          },
          {
            name: 'Typescript',
            value: this.tsWords,
          },
        ];
        var Lienendaten = [
          {
            name: 'HTML',
            value: this.htmlLines,
          },
          {
            name: 'CSS',
            value: this.cssLines,
          },
          {
            name: 'Javascript',
            value: this.tsLines,
          },
          {
            name: 'Typescript',
            value: this.tsLines,
          },
        ];
        Object.assign(this, { Zeichendaten, Woerterdaten, Lienendaten });
      });
  }
  ngOnInit(): void {}
  Zeichendaten = [
    {
      name: 'Zeichen',
      value: this.htmlChars,
    },
    {
      name: 'Wörter',
      value: this.cssChars,
    },
    {
      name: 'Zeilen',
      value: this.tsChars,
    },
  ];
  Woerterdaten = [
    {
      name: 'HTML',
      value: this.htmlWords,
    },
    {
      name: 'CSS',
      value: this.cssWords,
    },
    {
      name: 'Javascript',
      value: this.tsWords,
    },
    {
      name: 'Typescript',
      value: this.tsWords,
    },
  ];
  Lienendaten = [
    {
      name: 'HTML',
      value: this.htmlLines,
    },
    {
      name: 'CSS',
      value: this.cssLines,
    },
    {
      name: 'Javascript',
      value: this.tsLines,
    },
    {
      name: 'Typescript',
      value: this.tsLines,
    },
  ];

  // options
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel1 = 'Buchstaben';
  xAxisLabel2 = 'Wörter';
  xAxisLabel3 = 'Zeilen';
  showYAxisLabel = true;
  yAxisLabel = 'Anzahl';
  colorScheme = [
    { name: 'HTML', value: '#f06529' },
    { name: 'CSS', value: '#264de4' },
    { name: 'JavaScript', value: '#F0DB4F' },
    { name: 'Typescript', value: '#007acc' },
  ];

  constructor() {
    this.getChartData();
  }

  onSelect(event) {
    console.log(event);
  }
}
