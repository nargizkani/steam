import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  public gameDetails;
  public gameText = [];
  public commentList = [];
  public screenshots = [];
  public gameTextTitles = ['Об игре', 'Минимальные требования', 'Additional'];
  constructor(private gamesService: GamesService, private route: ActivatedRoute) { }
  public id = this.route.snapshot.paramMap.get('id');

  commentModel = {
    username: '',
    text: '',
    id: 0,
    rating: 0
  };

  ngOnInit(): void {
    this.gamesService.getGame(this.id).subscribe(game => {
      this.gameDetails = game;
      this.gameText = this.gameDetails.text.split('~');
    });

    this.gamesService.getComments().subscribe(data => {
      // tslint:disable-next-line:triple-equals
      this.commentList = data.filter(o => o.game.id == this.gameDetails.id)
      console.log(this.commentList);
    });
  }

  leaveComment() {
    this.commentModel.id = this.gameDetails.id
    this.gamesService.setComment(this.commentModel).subscribe();
  }

}
