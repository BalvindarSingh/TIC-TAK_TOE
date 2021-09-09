import Game from "./Game.js"
import GameViev from "./GameViev.js"

let game = new Game();
let gameViev = new GameViev();

document.querySelector(".restart").addEventListener("click", () => {
    // console.log("New Game")
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
// console.log(tiles)
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {

        onTileClick(tile.dataset.index);


    })

})

function onTileClick(i) {
    game.makeMove(i)
    gameViev.updateBoard(game);
}

function onRestartClick() {
    game = new Game()
    gameViev.updateBoard(game);
}
gameViev.updateBoard(game);