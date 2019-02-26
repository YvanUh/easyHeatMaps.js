/*
------------------Proposition 1:
The function below uses div to create a table
*/

function makeDiv(num) {
    //Create array
    let tab = [];
    //Fill array.length to num square
    for (let i = 0; i < (num**2); i++) {
        //Fill array with random numbers from 1 to 60
        tab.push(Math.floor(Math.random()*(60-1)+1));
    }
    //Optional line to verify tab content
    console.log(tab);
    
    //Now, let's act on each tab[i]
    tab.forEach(function(v,i) {
        //First, add breaks every mutiple of num
        if (i % num == 0) {
            //Create and append break in document
            let el = document.createElement("BR");
            document.getElementById("result1ID").appendChild(el);    
        }

        //Then, for every i, create a div element
        let el = document.createElement("DIV");
        //Also insert content
        el.innerHTML = v;

        //Now, modifiy color depending on condition 1
        if (v % 2 == 0 && v % 3 == 0) {
            el.style.backgroundColor = "aquamarine";
        } else {
            //Now apply condition 2
            el.style.backgroundColor = "salmon";

            //In addition, add event listener
            el.addEventListener("mouseover", function() {
                el.style.backgroundColor = "lightblue";
            })
        }

        //Finally, append element to target in document
        document.getElementById("result1ID").appendChild(el);
    });
}





/*
------------------Proposition 2:
The function below uses table to create a table
*/
function makeTable(num){
    //Create a table element
    let t = document.createElement("TABLE");
    //Create rows
    for (let i = 0; i < num; i++) {
        let r = t.insertRow(i);
        //Create cells
        for (let j = 0; j < num; j++) {
            let c = r.insertCell(j);
            c.innerHTML = Math.floor(Math.random()*(60-1)+1)
            }
    }
    
    //Finally, append table
    document.getElementById("result2ID").appendChild(t);

    //Now let's apply conditions via another function
    modifyTable();
}

function modifyTable() {
    //First, let's find all cells in the document
    let cells = document.querySelectorAll("TD");  

    //Now, let's act on each of these cells
    cells.forEach(function(v,i) {

        //Since we have no value, let's use td content as referent
        let cellCont = cells[i].innerHTML;

        //Modifiy color depending on condition 1
        if (cellCont % 2 == 0 && cellCont % 3 == 0) {
            cells[i].style.backgroundColor = "aquamarine";
        } else {
            //Now apply condition 2
            cells[i].style.backgroundColor = "salmon";

            //In addition, add event listener
            cells[i].addEventListener("mouseover", function() {
                cells[i].style.backgroundColor = "lightblue";
            });
        }

    });
}