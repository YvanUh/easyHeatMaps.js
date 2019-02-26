function makeInput() {
    //Assign user input to var
    let num = document.getElementById("inputID").value;
    //Only proceed if digit
    if (parseInt(num, 10) == num) {
        //Send input to make exam via two functions, the first one uses divs, the other a table
        makeDiv(num);
        makeTable(num);
    } else{
        //Show alert if no digit
        alert("Digits only!");
    }
}