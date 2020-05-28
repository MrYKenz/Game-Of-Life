const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const res = 10;
const rows = canvas.height / res;
const cols = canvas.width / res;

const grid = new Array(rows).fill(null).map(()=>new Array(cols).fill(0));
console.table(grid);


function render(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j];
            ctx.beginPath();
            ctx.rect(i * res, j * res, res, res);
            ctx.stroke();
        }
    }
}
render(grid);