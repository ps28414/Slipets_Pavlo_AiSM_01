function add(a, b) {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        var result = num1 + num2;
        document.getElementById("result").innerHTML = result;
    }
    else{
        document.getElementById("result").innerHTML = "Uwaga: podana wartość nie jest liczbą!";
    }
}
function odejmowanie(a, b) {
    var num3 = Number(document.getElementById("num3").value);
    var num4 = Number(document.getElementById("num4").value);
    if (Number.isInteger(num3) && Number.isInteger(num4)) {
        var result2 = num3 - num4;
        document.getElementById("result2").innerHTML = result2;
    }
    else{
        document.getElementById("result2").innerHTML = "Uwaga: podana wartość nie jest liczbą!";
    }
}
function mnożenie(a, b) {
    var num5 = Number(document.getElementById("num5").value);
    var num6 = Number(document.getElementById("num6").value);
    if (Number.isInteger(num5) && Number.isInteger(num6)) {
        var result3 = num5 * num6;
        document.getElementById("result3").innerHTML = result3;
    }
    else{
        document.getElementById("result3").innerHTML = "Uwaga: podana wartość nie jest liczbą!";
    }
}
function dzielenie(a, b) {
    var num7 = Number(document.getElementById("num7").value);
    var num8 = Number(document.getElementById("num8").value);
    if (Number.isInteger(num7) && Number.isInteger(num8)) {
        var result4 = num7 - num8;
        document.getElementById("result4").innerHTML = result4;
    }
    else{
        document.getElementById("result4").innerHTML = "Uwaga: podana wartość nie jest liczbą!";
    }
}
function potęgowanie(a, b) {
    var num9 = Number(document.getElementById("num9").value);
    var num10 = Number(document.getElementById("num10").value);
    if (Number.isInteger(num9) && Number.isInteger(num10)) {
        var result5 = Math.pow(num9, num10);
        document.getElementById("result5").innerHTML = result5;
    }
    else{
        document.getElementById("result5").innerHTML = "Uwaga: podana wartość nie jest liczbą!";
    }
}