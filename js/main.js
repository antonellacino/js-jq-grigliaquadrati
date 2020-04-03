$(document).ready(function() {
    var square = '<div class="square"></div>';
    var numRandom;

    //ciclo x creazione griglia
    for (i = 0; i < 64; i++) {
        $('.grid').append(square);
    }

    generateBombs();

    //fuzione x la generazione delle bombe
    function generateBombs() {
        for (i = 0; i <= 15; i++) {
            numRandom = Math.floor(Math.random() * 64) + 1;
            if (numRandom === numRandom) {
                numRandom = Math.floor(Math.random() * 64) + 1;
            }
            $('.square').eq(numRandom).addClass('redWannaBe');
        }

    }








});