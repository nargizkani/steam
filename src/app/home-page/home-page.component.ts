import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public games = [];
  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.gamesService.getGames()
      .subscribe(data => {
        this.games = this.shuffle(data);
      });

  }
  shuffle(array) {
    // tslint:disable-next-line:one-variable-per-declaration
     let currentIndex = array.length, randomIndex, temporaryValue;
     while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
}
     return array;
}
  gameDetails(path, id) {
    this.router.navigate(['/library/' + path + '/game-details/' + id]);
    console.log('/library/' + path + '/game-details/' + id);
  }
}
