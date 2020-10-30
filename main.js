$(document).ready(function(){

    //ESERCIZIO 1
    //creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
    console.log('ESERCIZIO 1:');

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

    //stampo uno spazio per unmiglior ordine nella console
    console.log(' ');

    //ESERCIZIO 2
    //creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
    console.log('ESERCIZIO 2:');

    //inizializzo un array di oggetti studente
    var studenti = [
        {
            'nome' : 'Marco',
            'cognome' : 'Rossi',
            'eta' : 20
        },
        {
            'nome' : 'Anna',
            'cognome' : 'Verdi',
            'eta' : 25
        },
        {
            'nome' : 'Paolo',
            'cognome' : 'Neri',
            'eta' : 23
        }
    ];

    //ogni iterazione corrisponde ad un oggetto studente
    for (var i = 0; i < studenti.length; i++) {
        //stampo studente numero i
        console.log('Studente ' + (i + 1) + ':');
        //variabile che scorre l'oggetto
        var nome_o_cognome;
        //scorro l'oggetto
        for (nome_o_cognome in studenti[i]){
            //stampo solo nome e cognome
            if (nome_o_cognome == 'nome' || nome_o_cognome == 'cognome') {
                console.log(nome_o_cognome + ': ' + studenti[i][nome_o_cognome]);
            }
        }
    }

    //stampo uno spazio per unmiglior ordine nella console
    console.log(' ');

    //ESERCIZIO 3
    //ramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
    console.log('ESERCIZIO 3');

    //chiedo all'utente i dati del nuovo studente
    var nome = prompt('Inserisci un nome per il nuovo studente: ');
    var cognome = prompt('Inserisci un cognome per il nuovo studente: ');
    do {
        var eta = parseInt(prompt('Inserisci l\'età del nuovo studente: '));
        if(isNaN(eta) || eta < 1 || eta > 90){
            alert('inserire età valida!')
        }
    } while (isNaN(eta) || eta < 1 || eta > 90);

    //inizializzo l'oggetto con i dati del nuovo studente
    var nuovo_studente = {
        'nome' : nome,
        'cognome' : cognome,
        'eta' : eta
    };

    //aggiungo il nuovo_studente all'array studente
    studenti.push(nuovo_studente);
    console.log(studenti);


});
