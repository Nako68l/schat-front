import { Component } from '@angular/core';
import { ThemeService } from '@srv/theme.service';

const themes = {
  ocean: {
    dark: 'hsla(197, 92%, 31%, 1)',
    primary: 'hsla(187, 99%, 31%, 1)',
    secondary: 'hsla(174, 100%, 35%, 1)',
    light: 'hsla(64, 100%, 89%, 1)',
  },
  autum: {
    dark: 'hsla(25, 76%, 53%, 1)',
    primary: 'hsla(26, 94%, 62%, 1)',
    secondary: 'hsla(35, 100%, 60%, 1)',
    light: 'hsla(37, 100%, 79%, 1)',
  },
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private theme: ThemeService, ) {
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

}
