const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const res = 10;
const rows = canvas.height / res;
const cols = canvas.width / res;

let alive = 0;
let gen = 0;

let grid = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
// console.table(grid);

// render grid on canvas
function render(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            if (grid[i][j] === 1) {
                ctx.fillStyle = 'green';
                ctx.fillRect(i*res, j*res, res, res);
            } else {
                ctx.fillStyle = 'white';
                ctx.fillRect(i*res, j*res, res, res);
            }
            ctx.rect(i*res, j*res, res, res);
            ctx.stroke();
        }
    }
}
render(grid);

// count neighbours and kill or create cells
function generation(grid) {
    const nextGen = grid.map(a => [...a]);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let neighbours = 0;
            // count number of neighbours
            for (let n = -1; n < 2; n++) {
                for (let m = -1; m < 2; m++) {
                    if (n == 0 && m == 0) {
                        continue;
                    }
                    // if neighbours in grid boundary
                    const x = i + n;
                    const y = j + m;
                    if (x >= 0 && y >= 0 && x < cols && y < rows) {
                        neighbours = neighbours + grid[i+n][j+m]
                    }
                }
            }
            // Rule 1: kill cell if neighbours less than 2 (underpopulation)
            if (grid[i][j] == 1 && neighbours < 2) {
                nextGen[i][j] = 0;
                alive = alive - 1;
            }
            // Rule 2: kill cell if neighbours more than 3 (overpopulation) 
            else if (grid[i][j] == 1 && neighbours > 3) {
                nextGen[i][j] = 0;
                alive = alive - 1;
            }
            // Rule 3: create cell if neighbours is exactly 3 (reproduction)
            else if (grid[i][j] == 0 && neighbours == 3) {
                nextGen[i][j] = 1;
                alive = alive + 1;
            }
        }
    }
    gen = gen + 1;
    return nextGen
}


// create or kill cells with mouseclick and rerender grid
function spawn(e) {
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
        alive = alive + 1;
    }
    else if (xy == 1) {
        grid[gridX][gridY] = 0;
        alive = alive - 1;
    }
    document.getElementById("alive").innerText = alive;
    render(grid);
}

function run() {
    requestAnimationFrame(frame);
    function frame() {
        grid = generation(grid);
        render(grid);
        // setTimeout(render(grid), 5000);
        requestAnimationFrame(frame);
        document.getElementById("alive").innerText = alive;
        document.getElementById("gen").innerText = gen;
    }
}
canvas.addEventListener("mousedown", spawn, false);