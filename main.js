let countEl = document.getElementById("count-el");      //counts when increment is clicked
let entriesEl = document.getElementById("entries-el");  //previous entries at bottom


let count = 0;
function increment() {
    count += 1;                 //i.e. count = count + 1;
    countEl.innerText = count;
}

function save() {
    // let saveCount = count + ", ";
    entriesEl.textContent += count + ", ";
    countEl.innerText = 0;
    count = 0;                  //reassign count value to 0 to reset the count to 0
}









