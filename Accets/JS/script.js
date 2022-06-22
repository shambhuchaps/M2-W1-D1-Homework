function readMore() {
    var moreText = document.getElementById("more");
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("read-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }

}
function showMore() {
    var moreText = document.getElementById("more1");
    var dots = document.getElementById("dots1");
    var btnText = document.getElementById("read-more1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }

}
function modelItem1() {
    // Get the modal
    var modal_1 = document.getElementById("main-Item-model-1");

    // Get the button that opens the modal
    var btn_1 = document.getElementById("main-Item-1");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn_1.onclick = function () {
        modal_1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal_1.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal_1) {
            modal_1.style.display = "none";
        }
    }
}
function modelItem2() {
    var modal_2 = document.getElementById("main-Item-model-2");
    var btn_2 = document.getElementById("main-Item-2");
    var span = document.getElementsByClassName("close")[1];
    btn_2.onclick = function () {
        modal_2.style.display = "block";
    }
    span.onclick = function () {
        modal_2.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_2) {
            modal_2.style.display = "none";
        }
    }
}
function modelItem3() {
    var modal_3 = document.getElementById("main-Item-model-3");
    var btn_3 = document.getElementById("main-Item-3");
    var span = document.getElementsByClassName("close")[2];
    btn_3.onclick = function () {
        modal_3.style.display = "block";
    }
    span.onclick = function () {
        modal_3.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_3) {
            modal_3.style.display = "none";
        }
    }
}
function modelItem4() {
    var modal_4 = document.getElementById("main-Item-model-4");
    var btn_4 = document.getElementById("main-Item-4");
    var span = document.getElementsByClassName("close")[3];
    btn_4.onclick = function () {
        modal_4.style.display = "block";
    }
    span.onclick = function () {
        modal_4.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_4) {
            modal_4.style.display = "none";
        }
    }
}
function modelItem5() {
    var modal_5 = document.getElementById("main-Item-model-5");
    var btn_5 = document.getElementById("main-Item-5");
    var span = document.getElementsByClassName("close")[4];
    btn_5.onclick = function () {
        modal_5.style.display = "block";
    }
    span.onclick = function () {
        modal_5.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_5) {
            modal_5.style.display = "none";
        }
    }
}
function modelItem6() {
    var modal_6 = document.getElementById("main-Item-model-6");
    var btn_6 = document.getElementById("main-Item-6");
    var span = document.getElementsByClassName("close")[5];
    btn_6.onclick = function () {
        modal_6.style.display = "block";
    }
    span.onclick = function () {
        modal_6.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_6) {
            modal_6.style.display = "none";
        }
    }
}
function modelItem7() {
    var modal_7 = document.getElementById("main-Item-model-7");
    var btn_7 = document.getElementById("main-Item-7");
    var span = document.getElementsByClassName("close")[6];
    btn_7.onclick = function () {
        modal_7.style.display = "block";
    }
    span.onclick = function () {
        modal_7.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_7) {
            modal_7.style.display = "none";
        }
    }
}
function modelItem8() {
    var modal_8 = document.getElementById("main-Item-model-8");
    var btn_8 = document.getElementById("main-Item-8");
    var span = document.getElementsByClassName("close")[7];
    btn_8.onclick = function () {
        modal_8.style.display = "block";
    }
    span.onclick = function () {
        modal_8.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal_8) {
            modal_8.style.display = "none";
        }
    }
}
function displayModel(){
    var displayB = document.querySelector('.main-item-container');
    displayB.classList.toggle('show-item-content');
    
}
function displayModel2(){
    var displayC = document.querySelector('.para-container');
    displayC.classList.toggle('show-item-content');
}
function showNav(){
    document.querySelector('.navbar ul').classList.toggle('show');
}