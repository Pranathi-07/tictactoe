import { Component, OnInit } from '@angular/core';
import { Status } from '../gamestatus';
import { Gameservice } from '../gameservice';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Gameservice],
})
export class GameComponent implements OnInit {
  gridsize: any;
  grids: any[] = [
    { id: 1, rows: 3, columns: 3 },
    { id: 2, rows: 5, columns: 5 },
  ];
  radioSelected: any;
  showBoard: boolean = false;
  constructor(public gameService: Gameservice) {}
  // gameStatus:boolean = false;
  playerName1: string = '';
  playerName2: string = '';
  playerName3: string = '';
  playerName4: string = '';
  currentPlayerList5: string[] = [
    this.playerName1,
    this.playerName2,
    this.playerName3,
    this.playerName4,
  ];
  currentPlayerList3: string[] = [this.playerName1, this.playerName2];
  gameStatus: Status = Status.STOP;

  ngOnInit(): void {}

  startGame(): void {
    // this.gameService.setGameMode(this.radioSelected);
    this.showBoard = true;
    this.gameStatus = Status.START;
  }

  emitSelected() {
    this.showBoard = false;
  }

  resetGame() {
    this.showBoard = false;
    this.gameStatus = Status.STOP;
  }
}
