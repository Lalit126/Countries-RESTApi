import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{ 

  constructor(private themeService : ThemeService) { } 


  toggleTheme(){

    this.themeService.toggleMode();
    

  }


}
