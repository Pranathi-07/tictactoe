import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import {Status}  from './gamestatus';

export class Gameservice {
    gameField: Array<number> = [];
    currentPlayer:number = 1;
    gameStatus: Status=Status.START;
    count:number=0;
    

    setField(position:number, value:number):void{
        this.gameField[position]=value;
        console.log(this.gameField);
    }

    getPlayerColorClass(): string {
        const colorClass= (this.currentPlayer % 2 ===0)?'teamtwo':'teamone';
        return colorClass; 
    }
    changePlayer(rows:any):void{
        let length:any;
        if(rows.length===5){length=4;}
        else if(rows.length===3){length=2;}
        this.count++;
        if(this.currentPlayer<length)
        this.currentPlayer+=1
        else
        this.currentPlayer=1 
         
    }

    async checkGamefull(rows:any):Promise<boolean>{

        let isFull=true;
        this.gameStatus=Status.STOP;
        if(this.count<8 && rows.length===3){
            this.gameStatus=Status.START;
            isFull = false;
        }else if(this.count<24 && rows.length===5){
            this.gameStatus=Status.START;
            isFull = false;  
        }
        return isFull;
    }
}
