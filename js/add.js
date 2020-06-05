var numone = document.getElementById("num-one");
var numtwo = document.getElementById("num-two");
var addsum = document.getElementById("add-sum");
numone.addEventListener("input", add);
numtwo.addEventListener("input", add);


function add() {
    var one = parseFloat(numone.value) || 0;
    var two = parseFloat(numtwo.value) || 0;
    var sum = one + two;
    addsum.innerHTML = "你的合计为：" + sum;
}