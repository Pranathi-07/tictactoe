import { Component, Input, OnInit } from '@angular/core';
import {Gameservice} from '../gameservice'


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers:[Gameservice]
})
export class GridComponent implements OnInit {

 @Input('game') game:any;
//  @Input('gameStatus') gameStatus:boolean=true;
 @Input('currentPlayerList5') currentPlayerList5=[];
 @Input('currentPlayerList3') currentPlayerList3=[];
  rows:any[] = [] ;
  columns:any[] =[];

  // checkGamefull:any;

  constructor(public grid: Gameservice ) { }

  ngOnInit(): void {
    this.rows = Array(this.game.rows).fill("");
    this.columns = Array(this.game.columns).fill("");
    console.log(this.rows, this.columns)
  }
  clickSubfield(col:any){
    
    if(this.grid.gameStatus===1 && col.currentTarget.innerHTML === ''){
      const position =col.currentTarget.getAttribute("position")
      const information = document.querySelector('.current-status');
      if(this.game.rows===3){
        this.grid.setField(position,this.grid.currentPlayer);
        const color= this.grid.getPlayerColorClass();
        col.currentTarget.classList.add(color);
        col.currentTarget.innerHTML = this.grid.currentPlayer % 2 === 0 ? 'X' : 'O';
      }else if(this.game.rows===5){
        this.grid.setField(position,this.grid.currentPlayer);
        const color= this.grid.getPlayerColorClass();
        col.currentTarget.classList.add(color);
        col.currentTarget.innerHTML = this.grid.currentPlayer % 2 === 0 ? 'X' : 'O';
      }
      
      // this.grid.checkGamefull().then( (end:Boolean)=>{
      //   if(this.grid.gameStatus===0 && end){

      //     if (information === null) {
      //       // information.innerHTML= "No Winner, DRAW ";
      //     } else {
      //       alert('oops');
            
      //     } 
      //   }
      // });
    }

    this.grid.changePlayer();
      
    }
 

}
