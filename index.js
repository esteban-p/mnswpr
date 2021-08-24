

//------------ Create board in DOM on load -------------

window.addEventListener('load', (event) => {
        
    let htmlToAdd = '';
    htmlToAdd += `
    <table id='table-board'>
        <tbody>
    `;
    
    for (let i = 1; i < board.length - 1; i++) {
        htmlToAdd += `
            <tr>
        `;

        for (let j = 1; j < board[i].length - 1; j++) {
            htmlToAdd += `
                <td id='r${board[i][j].row}c${board[i][j].col}' class='covered'><span>${board[i][j].value}</span></td>
            `
        }

        htmlToAdd += `
            </tr>
        `;
    }
    
    console.log(htmlToAdd);
    document.querySelector('#board-div').innerHTML = htmlToAdd;
});






