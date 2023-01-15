let countEl= document.getElementById("count");
let count = 0;
function increment(){
    count += 1;
    countEl.innerHTML = count;
} 
// save section
let saveEl = document.getElementById("save-el")
function save(){
    // textcontent is used in plcae of innertext so as to make the space around the "-" visible
    let outPut = countEl.textContent + " - ";
    saveEl.innerHTML += outPut;
    countEl.innerHTML = 0;
    count = 0;
}