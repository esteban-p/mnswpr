
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //9x9

    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}]

    //11x11 to include borders and be able to use indexes to allocate the same cell directly without considering the "index 0" issue

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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








//------------ Class Cell creation -------------

class Cell {
    constructor(row, col) {
        this.row = 0;
        this.col = 0;
        this.value = '';
        this.imageToShow = '';
    }
}



//------------ Function to create the board -------------

function createBoard(rows, cols) {
    let board = [];
    for (let i = 0; i <= rows + 1; i++) {
        let boardRow = [];
        for (let j = 0; j <= cols + 1; j++) {
            boardRow.push(new Cell);
        }
        board.push(boardRow);
    }
    return board;
}
let board = createBoard(9, 9);
//console.log(board);







//------------ Function to assign row & col values to cell objects -------------

function assignRowColToCells(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j <arr[i].length; j++) {
            arr[i][j].row = i;
            arr[i][j].col = j;
        }
    }
}
assignRowColToCells(board);
console.log(board);






//------------ Function to random allocation of mines -------------

function assignRandomMines(rows, cols, mines) {
    let minesToAssign = mines;
    let minesAssigned = 0;
    while (minesAssigned < mines) {
        let randomRow = Math.floor(Math.random()*rows) + 1;
        let randomCol = Math.floor(Math.random()*cols) + 1;
        if (board[randomRow][randomCol].value !== 'mine') {
            board[randomRow][randomCol].value = 'mine';
            minesAssigned += 1;
        } 
    }
}
//assignRandomMines(9,9,10);
//console.log(board);


//------------ Function to check assigned mines -------------

function checkedAssignedMines(arr) {
    let assignedMinesArr = [];
    let countedMines = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j].value === 'mine') {
                countedMines += 1;
                assignedMinesArr.push('Mine #' + countedMines + ' Row: ' + arr[i][j].row + ' Col: ' + arr[i][j].col);
            }
        }
    }
    return assignedMinesArr;
}
//console.log(checkedAssignedMines(board));





    


//------------ Cell value calculation when not assigned randomly already as mine -------------

function calculateCellValue(currentCellRow, currentCellCol) {

    let dirN = board[currentCellRow-1][currentCellCol];
    let dirNE = board[currentCellRow-1][currentCellCol+1];
    let dirE = board[currentCellRow][currentCellCol+1];
    let dirSE = board[currentCellRow+1][currentCellCol+1];
    let dirS = board[currentCellRow+1][currentCellCol];
    let dirSW = board[currentCellRow+1][currentCellCol-1];
    let dirW = board[currentCellRow][currentCellCol-1];
    let dirNW = board[currentCellRow-1][currentCellCol-1];
    let adjacentMines = 0;

    // This cell value check
    if (board[currentCellRow][currentCellCol].value === 'mine') {
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

//console.log(calculateCellValue(4,7));










