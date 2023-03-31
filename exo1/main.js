function disparition(){
    var toto = document.querySelectorAll(".test");
    toto.forEach((elem) => elem.classList.add("active"));
}    

function apparition(){var toto = document.querySelectorAll(".test");
    toto.forEach((elem) => elem.classList.remove("active"));
}