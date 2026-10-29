let cours = [
    {
        logo:"M",
        titre: "Mathematiques",
        matiere: "Mathematiques",
        niveau: "Primaire",
        creneau: "Lun. & Mer. 16:00",
        prix: 200,
        places: 8
    },
    {
        logo:"F",
        titre: "Francais",
        matiere: "Francais",
        niveau: "Primaire",
        creneau: "Mar. & Jeu. 16:00",
        prix: 180,
        places: 10
    },
    {
        logo:"M",
        titre: "Mathematiques",
        matiere: "Mathematiques",
        niveau: "College",
        creneau: "Lun. & Mer. 17:00",
        prix: 250,
        places: 6
    },
    {
        logo:"PC",
        titre: "Physique-Chimie",
        matiere: "Physique-Chimie",
        niveau: "College",
        creneau: "Mar. & Jeu. 17:00",
        prix: 250,
        places: 0
    },
    {
        logo:"F",
        titre: "Francais",
        matiere: "Francais",
        niveau: "Tronc commun",
        creneau: "Lun. & Mer. 18:00",
        prix: 280,
        places: 7
    },
    {
        logo:"A",
        titre: "Anglais",
        matiere: "Anglais",
        niveau: "Tronc commun",
        creneau: "Mar. & Jeu. 18:00",
        prix: 250,
        places: 9
    },
    {
        logo:"M",
        titre: "Mathematiques",
        matiere: "Mathematiques",
        niveau: "1ere Bac",
        creneau: "Lun. & Mer. 18:00",
        prix: 320,
        places: 5
    },
    {
        logo:"PC",
        titre: "Physique-Chimie",
        matiere: "Physique-Chimie",
        niveau: "1ere Bac",
        creneau: "Mar. & Jeu. 19:00",
        prix: 320,
        places: 4
    },
    {
        logo:"M",
        titre: "Mathematiques",
        matiere: "Mathematiques",
        niveau: "2eme Bac",
        creneau: "Lun. & Mer. 18:00",
        prix: 350,
        places: 6
    },
    {
        logo:"PC",
        titre: "Physique-Chimie",
        matiere: "Physique-Chimie",
        niveau: "2eme Bac",
        creneau: "Mar. & Jeu. 18:00",
        prix: 350,
        places: 0
    },
    {
        logo:"A",
        titre: "Anglais",
        matiere: "Anglais",
        niveau: "2eme Bac",
        creneau: "Samedi 10:00",
        prix: 280,
        places: 8
    },
    {
        logo:"F",
        titre: "Francais",
        matiere: "Francais",
        niveau: "2eme Bac",
        creneau: "Samedi 14:00",
        prix: 280,
        places: 3
    }
];

let carts = document.getElementById("carts");
let niveau = document.getElementById("niveau");
let matiere = document.getElementById("matiere");
let recherche = document.getElementById("recherche");
let boutonRecherche = document.getElementById("boutonRecherche");

function afficherCours() {
    let niveauChoisi = niveau.value;
    let matiereChoisie = matiere.value;

    // On récupère le texte tapé et on le met en minuscules.
    let texteRecherche = recherche.value.toLowerCase();

    // Cette variable compte les cours affichés.
    let nombreResultats = 0;

    carts.innerHTML = "";
    for (let i = 0; i < cours.length; i++) {
        // On met le titre, la matière et le niveau en minuscules pour comparer.
        let titreCours = cours[i].titre.toLowerCase();
        let matiereCours = cours[i].matiere.toLowerCase();
        let niveauCours = cours[i].niveau.toLowerCase();

        // On vérifie les filtres et la recherche en même temps.
        if ((niveauChoisi === "" || cours[i].niveau === niveauChoisi) &&
            (matiereChoisie === "" || cours[i].matiere === matiereChoisie) &&
            (texteRecherche === "" ||
                titreCours.includes(texteRecherche) ||
                matiereCours.includes(texteRecherche) ||
                niveauCours.includes(texteRecherche))) {
            carts.innerHTML += `
                <div class="border-2 border-gray-300 h-auto w-70 py-1 px-1 rounded-xl bg-[#fcfcfa]">
                    <div class="border-2 border-gray-300 h-auto w-[30px] rounded-[6px] py-0.5 bg-[#EDF7F2]">
                        <h2 class="flex justify-center">${cours[i].logo}</h2>
                    </div>
                    <h1 class="text-2xl text-Bleu-Nuit px-1">${cours[i].titre}</h1>
                    <p class="px-1">${cours[i].matiere}</p>
                    <p class="px-1">${cours[i].niveau}</p>
                    <p class="px-1">${cours[i].creneau}</p>
                    <p class="text-nour px-1">${cours[i].prix} MAD / mois</p>
                    <p class="px-1">${cours[i].places} places</p>
                    <button data-index="${i}"class="voir-cours text-amber-50 bg-nour rounded-2xl hover:text-nour-gold px-5">
                        Voir le cours
                    </button>
                </div>
            `;

            // On a trouvé un cours de plus à afficher.
            nombreResultats = nombreResultats + 1;
        }
    }

    // Si aucun cours ne correspond, on affiche le message.
    if (nombreResultats === 0) {
        carts.innerHTML = `<p class="text-center w-full py-10">Aucun cours trouvé.</p>`;
    }
}
niveau.addEventListener("change", afficherCours);
matiere.addEventListener("change", afficherCours);

// La recherche se met à jour pendant que l'utilisateur écrit.
recherche.addEventListener("input", afficherCours);

// Le bouton "Rechercher" affiche aussi les résultats.
boutonRecherche.addEventListener("click", afficherCours);
afficherCours();

let formulaire = document.getElementById("formulaire");
let formInscription = document.getElementById("formInscription");
let coursChoisi = document.getElementById("coursChoisi");
let niveauChoisi = document.getElementById("niveauChoisi");
let prixChoisi = document.getElementById("prixChoisi");
let fermerFormulaire = document.getElementById("fermerFormulaire");

// Ouvrir le formulaire 
carts.addEventListener("click", function(event) {
    let bouton = event.target.closest(".voir-cours");
    if (bouton === null) {
        return;
    }
    let index = Number(bouton.dataset.index);
    let coursSelectionne = cours[index];
    coursChoisi.value = coursSelectionne.titre;
    niveauChoisi.value = coursSelectionne.niveau;
    prixChoisi.value = coursSelectionne.prix + " MAD / mois";

    formulaire.classList.remove("hidden");
});
// Fermer le formulaire
fermerFormulaire.addEventListener("click", function() {
    formulaire.classList.add("hidden");
});

// Valider le formulaire
formInscription.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Votre demande d'inscription a ete preparee !");
    formInscription.reset();
    formulaire.classList.add("hidden");
});

let menuMobile = document.getElementById("menuMobile");
let navigation = document.getElementById("navigation");
menuMobile.addEventListener("click", function () {
    navigation.classList.toggle("hidden");

    let menuOuvert = !navigation.classList.contains("hidden");

    menuMobile.setAttribute("aria-expanded", menuOuvert);

    if (menuOuvert) {
        menuMobile.setAttribute("aria-label", "Fermer le menu");
    } else {
        menuMobile.setAttribute("aria-label", "Ouvrir le menu");
    }
});