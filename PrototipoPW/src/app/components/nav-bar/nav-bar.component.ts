import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
 
  constructor(private router : Router) {
    
  }
  NavigateHome(){
    this.router.navigate(['/home'])
  }
 

  NavigateAbout(){
    this.router.navigate(['/about'])
  }

  NavigateAdmin(){
    this.router.navigate(['/admin'])
  }

 
}
