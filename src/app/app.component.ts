import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    const navLink = document.querySelector('.nav-link');
    const menu = document.querySelector('.menu');
    menu?.addEventListener('click', () => {
      navLink?.classList.toggle('active');
    });
  }
}
