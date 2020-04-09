//"use strict";

function insert(num) {
    document.calcform.textview.value = document.calcform.textview.value + num
}

function equal() {
    var exp = document.calcform.textview.value;
    if (exp) {
        document.calcform.textview.value = eval(exp)
    }
}

function clean() {
    document.calcform.textview.value = "";
}
