import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  goToHome(): void {
    this.router.navigate(['']);
  }

  goToFav(): void {
    this.router.navigate(['/fav']);
  }

}
