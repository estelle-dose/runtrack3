function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();
    var jourSemaine = date.getDay();

    var joursFeries = [
        { date: new Date(annee, 0, 1), nom: "Jour de l'An" },
        { date: new Date(annee, 3, 13), nom: "Pâques" },
        { date: new Date(annee, 4, 1), nom: "Fête du Travail" },
        { date: new Date(annee, 4, 8), nom: "Victoire des Alliés en 1945" },
        { date: new Date(annee, 4, 21), nom: "Ascension" },
        { date: new Date(annee, 5, 1), nom: "Pentecôte" },
        { date: new Date(annee, 6, 14), nom: "Fête nationale" },
        { date: new Date(annee, 7, 15), nom: "Assomption" },
        { date: new Date(annee, 10, 1), nom: "Toussaint" },
        { date: new Date(annee, 10, 11), nom: "Armistice 1918" },
        { date: new Date(annee, 11, 25), nom: "Noël" }
    ];

    for (var i = 0; i < joursFeries.length; i++) {
        if (joursFeries[i].date.getDate() === jour && joursFeries[i].date.getMonth() === mois - 1) {
            console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié : " + joursFeries[i].nom);
            return;
        }
    }

    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
}

// Exemples d'utilisation de la fonction
var date1 = new Date(2020, 0, 1); // Jour de l'An (ferié)
jourtravaille(date1);

var date2 = new Date(2020, 4, 2); // 2 mai 2020 (samedi - week-end)
jourtravaille(date2);

var date3 = new Date(2020, 6, 14); // 14 juillet 2020 (ferié)
jourtravaille(date3);

var date4 = new Date(2020, 11, 28); // 28 décembre 2020 (travaillé)
jourtravaille(date4);

var date5 = new Date(2020, 1, 19); // 19 février 2020 (Mon anniversaire !)
jourtravaille(date5);

