function tienthue() {
    document.getElementById("hoten").value;
    var tongthue = "";
    var thunhapchiuthue = document.getElementById("thunhap").value * 12 - 4000000 - document.getElementById("songuoi").value * 1600000;
    if (thunhapchiuthue <= 60000000) {
        tongthue = thunhapchiuthue * 0.05;
    }
    else if (thunhapchiuthue <= 120000000) {
        tongthue = thunhapchiuthue * 0.1;
    }
    else if (thunhapchiuthue <= 210000000) {
        tongthue = thunhapchiuthue * 0.15;
    }
    else if (thunhapchiuthue <= 384000000) {
        tongthue = thunhapchiuthue * 0.2;
    }
    else if (thunhapchiuthue <= 624000000) {
        tongthue = thunhapchiuthue * 0.25;
    }
    else if (thunhapchiuthue <= 960000000) {
        tongthue = thunhapchiuthue * 0.3;
    }
    else {
        tongthue = thunhapchiuthue * 0.35;
    }
    document.getElementById("sotien").innerHTML = "Số tiền thuế mà " + document.getElementById("hoten").value + " phải đóng là: " + Math.floor(tongthue) + " VND";
}