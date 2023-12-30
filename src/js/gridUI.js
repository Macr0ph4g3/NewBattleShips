
function generateGrid(playerGameboard, computerGameboard) {
    // First create 10 rows
    let workingRow = 0;
    for (let i = 9; i >= 0; i--) {
      const tr = document.createElement("tr");
      const tr2 = document.createElement("tr");
      tr.classList.add("gameboardOneRows");
      tr.dataset.y = i;
      tr2.classList.add("gameboardTwoRows");
      tr2.dataset.y = i;
      console.log(tr, tr2)
      playerGameboard[0].appendChild(tr);
      computerGameboard[0].appendChild(tr2);
      // Then create 10 columns in each row
  
      for (let j = 0; j < 10; j++) {
        const gbOne = document.querySelectorAll(".gameboardOneRows");
        const td = document.createElement("td");
        td.dataset.x = j;
        td.dataset.owner = "Player";
        gbOne[workingRow].appendChild(td);
      }
      for (let j = 0; j < 10; j++) {
        const gbTwo = document.querySelectorAll(".gameboardTwoRows");
        const td = document.createElement("td");
        td.dataset.x = j;
        td.dataset.owner = "Computer";
        gbTwo[workingRow].appendChild(td);
      }
  
      workingRow = workingRow + 1;
    }
  }

  export { generateGrid }