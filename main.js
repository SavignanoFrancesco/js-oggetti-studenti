$(document).ready(function(){

    //creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore

    //inizializzo l'oggetto studente
    var studente = {
        'nome' : 'Marco',
        'cognome' : 'Rossi',
        'eta' : 20
    }

    //inizializzo variabile che scorre l'oggetto studente
    var caratteristica;

    //scorro l'oggetto studente e stampo il contenuto
    for (caratteristica in studente){
        console.log(caratteristica + ': ' + studente[caratteristica]);
    }

});
