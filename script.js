
let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerText = i + 1;
    addressColCont.appendChild(addressCol);
}

for (let i = 0; i < cols; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-row");
    addressCol.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressCol);
}

for (let i = 0; i < rows; i++) {
    let rowCount = document.createElement("div")
    rowCount.setAttribute("class", "row-cont")
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div")
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true")
        rowCount.appendChild(cell);
        addListenerForAddressBarDisplay(cell, i, j);
    }
    cellsCont.appendChild(rowCount);
}

function addListenerForAddressBarDisplay(cell, i, j) {
    cell.addEventListener("click", (e) => {
        let rowID = i + 1;
        let colID = String.fromCharCode(65 + j)
        addressBar.value = `${colID}${rowID}`
    })
}