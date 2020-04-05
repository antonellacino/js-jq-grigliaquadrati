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
        var selected = [];
        console.log(length);

        while (selected.length < 15) {
            numRandom = Math.floor(Math.random() * 64);
            if (selected.includes(numRandom)) {
                continue;
            }
            length = selected.push(numRandom);
            console.log(selected);
            $('.square').eq(numRandom).addClass('redWannaBe');
            console.log(selected.length);
            length++;
        }
    }
});