$(document).ready(function() {
    var square = '<div class="square"></div>';
    var numRandom;
    var flower = 0;

    //ciclo x creazione griglia
    Grid();

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
                $(this).addClass('backgroudBombs');
                $('div.grid').addClass('opacity20');
                $('div.square').addClass('no-clicks');
                $('div.alert').removeClass('hidden');
            } else {
                $(this).addClass('backgroudFlowers');
                $(this).addClass('active');
                flower++;
            }
            $('.found').html(flower);
            $('.notFound').html(64 - 15 - flower);
        });


    $('.riprova').click(
        function() {
            location.reload();
        }
    );


    $('.annulla').click(
        function() {
            $('div.grid').removeClass('opacity20');
            $('div.alert').addClass('hidden');

        }
    );



    //funzione x a creazione della griglia
    function Grid() {
        for (i = 0; i < 64; i++) {
            $('.grid').append(square);
        }
    }


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