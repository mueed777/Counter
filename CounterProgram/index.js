const decreaseBtn= document.getElementById("decreaseBtn");
const resetBtn= document.getElementById("resetBtn");
const increaseBtn= document.getElementById("increaseBtn");
const countNumber= document.getElementById("countNumber");

let count = 0;

function decreaseBtnAction() {
    count--;
    countNumber.textContent = count;
}
function resetBtnAction() {
    count = 0;
    countNumber.textContent = count;
}

function increaseBtnAction() {
    count++;
    countNumber.textContent = count
}

decreaseBtn.onclick = decreaseBtnAction;
resetBtn.onclick = resetBtnAction;
increaseBtn.onclick = increaseBtnAction;



