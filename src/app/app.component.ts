import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'steam';
  login = false;
  ngOnInit() {
    const user = localStorage.getItem('token');
    if (user != null) {
      this.login = true;
    }
  }

  logout() {
    localStorage.clear();
    this.login = false;
  }
}
