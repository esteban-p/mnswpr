


let gameExample = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
];

let game = [
    [{value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},             {},             {},             {},             {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},             {},             {},             {},             {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},      {value: 'mine'}, {value: 'mine'}, {value: 'mine'},     {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},      {value: 'mine'}, {value: 'CELL'}, {value: 'mine'},     {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},      {value: 'mine'}, {value: 'mine'}, {value: 'mine'},     {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},             {},             {},             {},             {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},             {},             {},             {},             {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},             {},             {},             {},             {},      {value: 'Out'}],
    [{value: 'Out'},     {},              {},              {},              {},             {},             {},             {},             {},             {},      {value: 'Out'}],
    [{value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}, {value: 'Out'}]
];






let cellExample = {
    row: 4, // 1 to 9
    col: 7, // 1 to 9
    value: 'mine', // Out, Mine, 0, 1, 2, 3, 4, 5, 6, 7, 8
    img: '', //Border, Cover, Cover w/flag, Cover w/QMark, EmptyGrid(value0), 1, 2, 3, 4, 5, 6, 7, 8, Mine
    coverState: '' //Border, Covered, Flag, QMarq, Uncovered
}





//------------ Cell value calculation when not assigned randomly already as mine -------------

function calculateCellValue(currentCellRow, currentCellCol) {

    let dirN = game[currentCellRow-1][currentCellCol];
    let dirNE = game[currentCellRow-1][currentCellCol+1];
    let dirE = game[currentCellRow][currentCellCol+1];
    let dirSE = game[currentCellRow+1][currentCellCol+1];
    let dirS = game[currentCellRow+1][currentCellCol];
    let dirSW = game[currentCellRow+1][currentCellCol-1];
    let dirW = game[currentCellRow][currentCellCol-1];
    let dirNW = game[currentCellRow-1][currentCellCol-1];
    let adjacentMines = 0;

    // This cell value check
    if (game[currentCellRow][currentCellCol].value === 'mine') {
        return 'This cell is a mine';
    }
    // N cell value check
    if (dirN.value === 'mine') {
        adjacentMines += 1;
    }
    // NE cell value check
    if (dirNE.value === 'mine') {
        adjacentMines += 1;
    }
    // E cell value check
    if (dirE.value === 'mine') {
        adjacentMines += 1;
    }
    // SE cell value check
    if (dirSE.value === 'mine') {
        adjacentMines += 1;
    }
    // S cell value check
    if (dirS.value === 'mine') {
        adjacentMines += 1;
    }
    // SW cell value check
    if (dirSW.value === 'mine') {
        adjacentMines += 1;
    }
    // W cell value check
    if (dirW.value === 'mine') {
        adjacentMines += 1;
    }
    // NW cell value check
    if (dirNW.value === 'mine') {
        adjacentMines += 1;
    }
    return adjacentMines;
};


console.log(calculateCellValue(4,7));
















