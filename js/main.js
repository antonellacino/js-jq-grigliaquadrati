$(document).ready(function() {
    var square = '<div class="square"></div>';
    var numRandom;
    var red = 0,
        green = 0;

    //ciclo x creazione griglia
    for (i = 0; i < 64; i++) {
        $('.grid').append(square);
    }

    generateBombs();

    // seleziono il quadratino e lo clicco
    $('.square').click(
        function() {
            //se il quadratino selezionato ha già la classe active, quindi già selezionato
            if ($(this).hasClass('active')) {
                alert('Ops! Hai già cliccato!')
            }
            //eseguo il controllo se ha la classe rosso
            if ($(this).hasClass('redWannaBe')) {
                $(this).css('background', 'red');
                $(this).addClass('active');
                red++;
                $('p.red').html('Numero quadratini rossi:' + red);
            } else {
                $(this).css('background', 'green');
                $(this).addClass('active');
                green++;
                $('p.green').html('Numero quadratini verdi:' + green);
            }
        });





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