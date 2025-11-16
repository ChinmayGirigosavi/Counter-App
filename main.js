// Increment Button: code to keep incrementing the count value by +1
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    // count = count + 1;
    count += 1;
    countEl.innerText = count;
}


// Save Button: code to save the latest count values, as well as to reset the count value to 0 for a fresh count start
let entriesEl = document.getElementById("entries-el");

function save() {
    let countStr = count + ", ";
    entriesEl.textContent += countStr;
    countEl.innerText = 0;
    // to fresh start from 0, reassign the count value to 0
    count = 0;
}



/* Note: textContent preserves white space(WS) and break(br) in comparision to innerText
    innerText doesn't preserve WS & br therefore WS doesn't appear with innerText   */






