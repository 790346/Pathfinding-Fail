
'use strict'

class Cell {
  constructor(game, location) {
    this.game = game;
    this.loc = location;
    this.occupied = 1;
    this.num = 0;
    this.neighbors = [];
    //this.row = row;
    //this.col = col;
    this.vec = new JSVector(0,0);
  }

  render(){
    //  draw a rectangle at location
    if(this.occupied == -1){
      this.game.context.fillStyle = 'black';
    } else if(this.occupied == 1){
      this.game.context.fillStyle="#AABBAA";
      // this.game.context.strokeStyle="#001122";
    }
    else if(this.occupied == 2){
      this.game.context.fillStyle = 'red';
    }
    else if(this.occupied == 3){
      this.game.context.fillStyle = 'blue';
    }
    else if(this.occupied == 4){
      this.game.context.fillStyle = 'green';
    }
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
  }
  addNeighbors(){
       var n, e, s, w;
       if(this.row > 0 && this.game.grid[this.row][this.col].occupied == 1){  // find north
            n = this.game.grid[this.row][this.col];
            this.neighbors.push(n);
            n.occupied = 4;
       }
       if(this.row < 35 && this.game.grid[this.row][this.col].occupied == 1){  // find north
            s = this.game.grid[this.row][this.col];
            this.neighbors.push(s);
            s.occupied = 4;
        }
        if(this.col > 0 && this.game.grid[this.row][this.col].occupied == 1){  // find north
             w = this.game.grid[this.row][this.col];
             this.neighbors.push(w);
             w.occupied = 4;
           }
           if(this.col > 32 && this.game.grid[this.row][this.col].occupied == 1){  // find north
                e = this.game.grid[this.row][this.col];
                this.neighbors.push(e);
                e.occupied = 4;
              }

     }


}
addNeighbors();
