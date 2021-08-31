import { Status } from './gamestatus';

export class Gameservice {
  gameMode: any;
  gameField: string[][] = [];
  Field: string[][] = [[], [], [], [], []];
  currentPlayer: number = 1;
  gameStatus: Status = Status.START;
  count: number = 0;

  createArray(rows: any) {
    for (let i = 0; i < rows.length; i++) {
      let colValues = [];
      for (let j = 0; j < rows.length; j++) {
        colValues.push('');
      }
      this.gameField[i] = colValues;
    }
  }

  setGameMode(gameMode: any) {
    this.gameMode = gameMode.rows;

    // this.gameField = Array(gameMode.rows).fill('');
  }
  setField(rowIndex: any, colIndex: any, value: number, rows: any): void {
    if (rows.length === 3) {
      let key = value === 1 ? 'O' : 'X';
      this.gameField[rowIndex][colIndex] = key;
    } else if (rows.length === 5) {
      let key = value % 2 === 0 ? 'X' : 'O';
      this.gameField[rowIndex][colIndex] = key;
    }
  }

  getPlayerColorClass(): string {
    const colorClass = this.currentPlayer % 2 === 0 ? 'teamtwo' : 'teamone';
    return colorClass;
  }
  changePlayer(rows: any): void {
    let length: any;
    if (rows.length === 5) {
      length = 4;
    } else if (rows.length === 3) {
      length = 2;
    }
    if (this.currentPlayer < length) this.currentPlayer += 1;
    else this.currentPlayer = 1;
    this.count++;
  }

  async checkGamefull(rows: any): Promise<boolean> {
    let isFull = true;
    this.gameStatus = Status.STOP;
    if (this.count < 8 && rows.length === 3) {
      this.gameStatus = Status.START;
      isFull = false;
    } else if (this.count < 24 && rows.length === 5) {
      this.gameStatus = Status.START;
      isFull = false;
    }
    return isFull;
  }
  winnerCheck(rows: any, playerMark: any): boolean {
    // horizontal check
    let size = rows.length;
    let winner: boolean = false;
    for (let i = 0; i < size; i++) {
      if (this.gameField[i][0] === playerMark) {
        let j;

        for (j = 1; j < size; j++) {
          if (this.gameField[i][j] !== playerMark) {
            break;
          }
        }
        if (j === size) {
          winner = true;
          break;
        }
      }
    }
    // vertical check
    for (let i = 0; i < size; i++) {
      if (this.gameField[0][i] === playerMark) {
        let j;

        for (j = 1; j < size; j++) {
          if (this.gameField[j][i] !== playerMark) {
            break;
          }
        }
        if (j === size) {
          winner = true;
          break;
        }
      }
    }
    // diagonals check
    if (!winner) {
      let i;

      for (i = 0; i < size; i++) {
        if (this.gameField[i][i] !== playerMark) {
          break;
        }

        if (i == size - 1) {
          winner = true;
          break;
        }
      }
      if (!winner) {
        for (i = 0; i < size; i++) {
          if (this.gameField[i][size - 1 - i] !== playerMark) {
            break;
          }

          if (i == size - 1) {
            winner = true;
            break;
          }
        }
      }
    }

    this.gameStatus = winner ? Status.STOP : this.gameStatus;
    return winner;
  }
}
