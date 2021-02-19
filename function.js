function afficher() {
    event.preventDefault();
    var Nom = document.getElementById("Nom").value;
    var Email = document.getElementById("Email").value;
    var sujet = document.getElementById("Sujet").value;
    var message = document.getElementById("message").value;
    Swal.fire(" \n" + Nom + "\n" + Email + "\n" + sujet + "\n" + message);

}




function type_moto() {

    var arr = ["Eléctrique", "Essence"];


    for (i = 0; i < arr.length; i++) {

        var opt = document.createElement("option");

        opt.value = arr[i];
        opt.innerHTML = arr[i];

        document.getElementById("output").appendChild(opt);

    }



}



/*------type citadine------ typeberline----------*/
function type_citadine_berline() {

    var arr = ["Eléctrique", "Hybride", "Essence", "Diesele"];

    for (i = 0; i < arr.length; i++) {

        var opt = document.createElement("option");

        opt.value = arr[i];
        opt.innerHTML = arr[i];

        document.getElementById("output").appendChild(opt);

    }
}

/*---------type_cpmpact--- berline---------*/

function type_compact_berline() {

    var arr = ["Hybride", "Essence", "Diesele"];

    for (i = 0; i < arr.length; i++) {

        var opt = document.createElement("option");

        opt.value = arr[i];
        opt.innerHTML = arr[i];

        document.getElementById("output").appendChild(opt);

    }
}

/*---------type_utilitaire----type_camio---------*/

function type_utilitaire_camio() {

    var arr = ["Diesele"];

    for (i = 0; i < arr.length; i++) {

        var opt = document.createElement("option");

        opt.value = arr[i];
        opt.innerHTML = arr[i];

        document.getElementById("output").appendChild(opt);

    }
}

/*---------Engin_chantier---------*/

function type_Engin_chantier() {

    var arr = ["Diesele","Essence"];

    for (i = 0; i < arr.length; i++) {

        var opt = document.createElement("option");

        opt.value = arr[i];
        opt.innerHTML = arr[i];

        document.getElementById("output").appendChild(opt);

    }
}


/*---------------- switch  categorie -------------*/


function random_function() {

    var categorie = document.getElementById("categorie").value;
    var carburant = document.getElementById('output').length = 1;

    switch (categorie) {
        case 'Moto':
            type_moto();

            break;
        case 'Citadine':

            type_citadine_berline();

            break;

        case 'Compact':
            type_compact_berline();

            break;
        case 'Berline':
            type_compact_berline();

            break;
        case 'Utilitaire':
            type_utilitaire_camio();

            break;
        case 'Engin chantier':
            type_Engin_chantier();

            break;
        case 'camio':
            type_utilitaire_camio();

            break;
        default:

    }




}


function vitesse() {
    var carburant = document.getElementById('output').value;
    var categorie = document.getElementById('categorie').value;
    var boite = document.getElementById('ng');
     document.getElementById('ng').length = 1;



    if (categorie === 'Moto') {
        boite.style.visibility = 'hidden';
    } else if (categorie === 'Berline' || categorie === 'camio') {
        boite.style.visibility = 'visible';
        var arr = ["Automatic"];

        for (i = 0; i < arr.length; i++) {

            var opt = document.createElement("option");
            opt.value = arr[i];
            opt.innerHTML = arr[i];

            document.getElementById("ng").appendChild(opt);
        }

    } else if (categorie === 'Citadine' || categorie === 'Compact' || categorie === ' Utilitaire' || categorie === 'Engin chantier') {
        boite.style.visibility = 'visible';
        var arr = ["Manuelle"];

        for (i = 0; i < arr.length; i++) {

            var opt = document.createElement("option");

            opt.value = arr[i];
            opt.innerHTML = arr[i];

            document.getElementById("ng").appendChild(opt);
        }

    }
}


function calculer() {
    event.preventDefault();


    //____________date_____________
    var x = document.getElementById("myDate").value;
    var y = document.getElementById("myDate2").value;



    var date1 = new Date(x);
    var date2 = new Date(y);
    // différence des heures
    var time_diff = date2.getTime() - date1.getTime();
    // différence de jours 1s-- 1h ---1j
    var days_Diff = time_diff / (1000 * 3600 * 24);

    if (days_Diff > 0) {
        days_Diff;

    } else {
        Swal.fire("Dat error verifier la date ");

    }



    var categorie = document.getElementById('categorie').value;
    var boite = document.getElementById('ng').value;
    var carburant = document.getElementById('output').value;
    var res;


    if (carburant === "Eléctrique") {
        if (categorie === "Moto") {
            res = (days_Diff * 10 + (10 * (5 / 100)));
        } else if (categorie === "Citadine") {
            res = (days_Diff * 12 + (12 * (5 / 100)));
        }

    }
    if (carburant === "Hybride") {
        if (categorie === "Citadine") {
            res = (days_Diff * 12 + (12 * (9 / 100)));
        } else if (categorie === "Compact") {
            res = (days_Diff * 14 + (14 * (9 / 100)))
        } else if (categorie === "Berline") {
            res = (days_Diff * 20 + (20 * (9 / 100)))
        }

    }

    if (carburant === "Essence") {
        if (categorie === "Moto") {
            res = (days_Diff * 10 + (10 * (14 / 100)));
        } else if (categorie === "Citadine") {
            res = (days_Diff * 12 + (12 * (14 / 100)));
        } else if (categorie === "Compact") {
            res = (days_Diff * 14 + (14 * (14 / 100)));
        } else if (categorie === "Berline") {
            if (boite === "Automatic") {
                res = (days_Diff * 20 + (20 * (14 / 100) + (19 / 100)));
            } else if (boite === "Manuelle") {
                res = (days_Diff * 20 + (20 * (14 / 100)));
            }
        } else if (categorie === "EnginCompact chantier") {
            res = (days_Diff * 900 + (900 * (14 / 100)));
        }

    }

    if (carburant === "Diesele") {
        if (categorie === "Citadine") {
            res = (days_Diff * 12 + (12 * (21 / 100)));
        } else if (categorie === "Compact") {

            res = (days_Diff * 14 + (14 * (21 / 100)));
        } else if (categorie === "Berline") {
           
                res = (days_Diff * 20 + (20 * (21 / 100) + (19 / 100)));
            
        } else if (categorie === "Utilitaire") {
            
                res = (days_Diff * 16 + (16 * (21 / 100)));
            
        } else if (categorie === "Engin chantier") {
            
                res = (days_Diff * 900 + (900 * (21 / 100)));
            
        } else if (categorie === "camio") {
       
                res = (days_Diff * 250 + (250 * (21 / 100) + (19 / 100)));
            
        }

    }




    document.getElementById('afficher').innerHTML = res.toFixed(2) + " €";





}