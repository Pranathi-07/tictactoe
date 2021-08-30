import {Status}  from './gamestatus';

export class Gameservice {
    gameField: Array<number> = [];
    currentPlayer:number = 0;
    gameStatus: Status=1;

    setField(position:number, value:number):void{
        this.gameField[position]=value;
    }

    getPlayerColorClass(): string {
        const colorClass= (this.currentPlayer % 2 ===0)?'teamtwo':'teamone';
        return colorClass; 
    }
    changePlayer():void{
        if(this.currentPlayer<4)
        this.currentPlayer+=1
        else
        this.currentPlayer=1   
    }

    async checkGamefull():Promise<boolean>{
        console.log(this.gameField);
        let isFull=true;
        if(this.gameField.includes(0)){
        isFull=false;
        }  
        if (isFull){
            this.gameStatus=0;
            return true;
        }
        else{
        return false;
        }
    }
}
