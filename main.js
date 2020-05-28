const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const res = 10;
const rows = canvas.height / res;
const cols = canvas.width / res;

const grid = new Array(rows).fill(null).map(()=>new Array(cols).fill(0));
console.table(grid);

let alive = 0;

// render grid on canvas
function render(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j];
            ctx.beginPath();
            ctx.strokeStyle = '#000';
            if (grid[i][j] === 1) {
                ctx.fillStyle = '#000';
                ctx.fillRect(i*res, j*res, res, res);
            } else {
                ctx.fillStyle = '#fff';
                ctx.fillRect(i*res, j*res, res, res);
              }
              ctx.rect(i*res, j*res, res, res);
            ctx.stroke();
        }
    }
}

// create or kill with mouseclick and rerender grid
function mouseClick(e) {
    let mouseX, mouseY;
    if(e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    } else if(e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
    const gridX = Math.floor(mouseX / 10);
    const gridY = Math.floor(mouseY / 10);
    // console.log(gridX, gridY);
    const xy = grid[gridX][gridY];
    if (xy == 0) {
        grid[gridX][gridY] = 1;
        alive = alive + 1
    }
    else if (xy == 1) {
        grid[gridX][gridY] = 0;
        alive = alive - 1
    }
    render(grid);
    document.getElementById("alive").innerText = alive
}

render(grid);
document.getElementById("alive").innerText = alive
canvas.addEventListener("mousedown", mouseClick, false);