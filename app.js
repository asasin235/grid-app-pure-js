//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        row.id=`row-${r}`;

    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            newCell.id=`${i}-${j}`;

        };

    };
};

function update(x,y){
    return `${x}-${y}`;
}
var x=0
var y=0
var pos=update(x,y);

var currentCell=document.getElementById(pos);
currentCell.className="active-cell";
function goLeft(){

    if(x-1<0)
        return;

    pos=update(--x,y);
    currentCell.className="cell";
    currentCell=document.getElementById(pos);
    currentCell.className="active-cell";

}

function goRight(){
    if(x+1>15)
        return;

    pos=update(++x,y);
    currentCell.className="cell";
    currentCell=document.getElementById(pos);
    currentCell.className="active-cell";
}

function goUp(){
    if(y-1<0)
        return;

    pos=update(x,--y);
    currentCell.className="cell";
    currentCell=document.getElementById(pos);
    currentCell.className="active-cell";
}

function goDown(){
    if(y+1>15)
        return;
    pos=update(x,++y);
    currentCell.className="cell";
    currentCell=document.getElementById(pos);
    currentCell.className="active-cell";
}



