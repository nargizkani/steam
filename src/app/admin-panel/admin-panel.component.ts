import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  games = [];
  edit = false;
  gameModel = {
    id: 0,
    name: '',
    description: '',
    image: '',
    category: {
      id: 0,
      name: ''
    },
    cat: '',
    price: '',
    text: '',
    screenshots: ''
  };
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(games => {
      this.games = games;
    });
  }

  onSubmit(): void {
    this.gamesService.create(this.gameModel).subscribe();
  }

  onDelete(id) {
    this.gamesService.delete(id).subscribe();
  }

  onEditStart(id) {
    this.gamesService.getGame(id).subscribe(data => {
      this.gameModel.name = data.name;
      this.gameModel.id = data.id;
      this.gameModel.cat = data.category.name;
      this.gameModel.description = data.description;
      this.gameModel.image = data.image;
      this.gameModel.price = data.price;
      this.gameModel.screenshots = data.screenshots;
      this.gameModel.text = data.text;
    });
    this.edit = true;
  }

  onEdit() {
    this.gamesService.update(this.gameModel).subscribe();
  }

}
