import { Component, OnInit } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface StartingTeam {
  color: string;
  message: string;
}

export enum TileColor {
  RED = "#ff0000",
  BLUE = "#0000ff",
  NEUTRAL = "#fff599",
  BLACK = "#000000",
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  startingTeamMessage: string;
  startingTeamColor: string = "black";

  pictureTiles: Tile[] = [
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.BLACK },
  ];

  wordTiles: Tile[] = [
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.NEUTRAL },
    { text: "", cols: 1, rows: 1, color: TileColor.BLACK },
  ];

  startingTiles: Tile[] = [
    { text: "", cols: 1, rows: 1, color: TileColor.RED },
    { text: "", cols: 1, rows: 1, color: TileColor.BLUE },
  ];

  tiles: Tile[] = [];

  ngOnInit() {
    this.generateKey();
  }

  generateKey() {
    let randomStartingTile: Tile = this.getRandomStartingTeamTile();

    let tempTiles = [...this.pictureTiles];

    tempTiles.push(randomStartingTile);

    this.randomizeTilesForDisplay(tempTiles);

    this.tiles = tempTiles;
  }

  getRandomStartingTeamTile(): Tile {
    const startingTeamTile: Tile = this.startingTiles[
      Math.floor(Math.random() * this.startingTiles.length)
    ];

    if (startingTeamTile.color == TileColor.RED) {
      this.startingTeamColor = "red";
      this.startingTeamMessage = "Red Team Starts!";
    } else {
      this.startingTeamColor = "blue";
      this.startingTeamMessage = "Blue Team Starts!";
    }

    return startingTeamTile;
  }

  randomizeTilesForDisplay(tileArrayToRandomize: Tile[]): Tile[] {
    for (let i = tileArrayToRandomize.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tileArrayToRandomize[i];
      tileArrayToRandomize[i] = tileArrayToRandomize[j];
      tileArrayToRandomize[j] = temp;
    }

    return tileArrayToRandomize;
  }
}
