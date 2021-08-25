// ------------ Create board in DOM  -------------

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
            <td id='r${board[i][j].row}c${board[i][j].col}' class='cell covered'><span>${board[i][j].value}</span></td>
        `
    }
    htmlToAdd += `
        </tr>
    `;
}  
htmlToAdd += `
    </tbody>
</table>
`;
//console.log(htmlToAdd);
document.querySelector('#board-div').innerHTML = htmlToAdd;





// -------- Apply the corresponding class to left-clicked cells  ---------

document.querySelectorAll('.cell').forEach((element) => {
    element.addEventListener('click', () => {
      //console.log('Cell clicked: ', element);
      const elementValue = element.querySelector('span').innerHTML;
      //console.log(elementValue);
      const elementID = element.getAttribute('id');
      //console.log('This element ID:' + elementID);
      const elementRow = elementID.slice(1,2); 
      //console.log(elementRow);
      const elementCol = elementID.slice(3,4); 
      //console.log(elementCol);

      const element_N_Id = 'r' + (+elementRow - 1) + 'c' + (+elementCol);
      const element_NE_Id = 'r' + (+elementRow - 1) + 'c' + (+elementCol + 1);
      const element_E_Id = 'r' + (+elementRow) + 'c' + (+elementCol + 1);
      const element_SE_Id = 'r' + (+elementRow + 1) + 'c' + (+elementCol + 1);
      const element_S_Id = 'r' + (+elementRow + 1) + 'c' + (+elementCol);
      const element_SW_Id = 'r' + (+elementRow + 1) + 'c' + (+elementCol - 1);
      const element_W_Id = 'r' + (+elementRow) + 'c' + (+elementCol - 1);
      const element_NW_Id = 'r' + (+elementRow - 1) + 'c' + (+elementCol - 1);      
    //   console.log('N: ' + element_N_Id);
    //   console.log('NE: ' + element_NE_Id);
    //   console.log('E: ' + element_E_Id);
    //   console.log('SE: ' + element_SE_Id);
    //   console.log('S: ' + element_S_Id);
    //   console.log('SW: ' + element_SW_Id);
    //   console.log('W: ' + element_W_Id);
    //   console.log('NW: ' + element_NW_Id);

        

      if (elementValue === 'm') {
        element.className = 'cell exploded';
        document.querySelectorAll('.cell').forEach((el) => {
            const elValue = el.querySelector('span').innerHTML;
            if ( el.getAttribute('id') !== element.getAttribute('id') ) {
                if (elValue === 'm') {el.className = 'cell mined';}
                else if (elValue === '0') {el.className = 'cell value-0';}
                else if (elValue === '1') {el.className = 'cell value-1';}
                else if (elValue === '2') {el.className = 'cell value-2';}
                else if (elValue === '3') {el.className = 'cell value-3';}
                else if (elValue === '4') {el.className = 'cell value-4';}
                else if (elValue === '5') {el.className = 'cell value-5';}
                else if (elValue === '6') {el.className = 'cell value-6';}
                else if (elValue === '7') {el.className = 'cell value-7';}
                else if (elValue === '8') {el.className = 'cell value-8';}
            } 
        }); 
    

 

      } else if (elementValue === '0') {
        element.className = 'cell value-0';
        


      } else if (elementValue === '1') {
        element.className = 'cell value-1';
      } else if (elementValue === '2') {
        element.className = 'cell value-2';
      } else if (elementValue === '3') {
        element.className = 'cell value-3';
      } else if (elementValue === '4') {
        element.className = 'cell value-4';
      } else if (elementValue === '5') {
        element.className = 'cell value-5';
      } else if (elementValue === '6') {
        element.className = 'cell value-6';
      } else if (elementValue === '7') {
        element.className = 'cell value-7';
      } else if (elementValue === '8') {
        element.className = 'cell value-8';
      } 

      
    });
});


  




// const r = 4;
// const c = 5;
// console.log(document.querySelector(`#r${r}c${c}`));

// console.log(document.querySelectorAll('td'));
// console.log(document.querySelectorAll('td').length);






// const allCells = document.getElementsByClassName('cell');
// console.log(allCells);

// for (cell in allCells) {
//     console.log(cell);
// }





//  .addEventListener('click') => {
//     // TODO: write some code here
//     console.log('Cell clicked: ', cell);
//   });




// let target2 = document.getElementById('.table-board');
// console.log(target2);

// let target3 = document.querySelector("#r1c2");
// console.log(target3);














// ------------ Create board in DOM on load with event listener -------------

// window.addEventListener('load', (event) => {   
//     let htmlToAdd = '';
//     htmlToAdd += `
//     <table id='table-board'>
//         <tbody>
//     `;   
//     for (let i = 1; i < board.length - 1; i++) {
//         htmlToAdd += `
//             <tr>
//         `;
//         for (let j = 1; j < board[i].length - 1; j++) {
//             htmlToAdd += `
//                 <td id='r${board[i][j].row}c${board[i][j].col}' class='cell value-1'><span>${board[i][j].value}</span></td>
//             `
//         }
//         htmlToAdd += `
//             </tr>
//         `;
//     }  
//     htmlToAdd += `
//         </tbody>
//     </table>
//     `;
//     //console.log(htmlToAdd);
//     document.querySelector('#board-div').innerHTML = htmlToAdd;
// });