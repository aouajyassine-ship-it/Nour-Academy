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
function afficherCours() {
    let niveauChoisi = niveau.value;
    let matiereChoisie = matiere.value;
    carts.innerHTML = "";
    for (let i = 0; i < cours.length; i++) {
        if ((niveauChoisi === "" || cours[i].niveau === niveauChoisi) && (matiereChoisie === "" || cours[i].matiere === matiereChoisie)) {
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
        }
    }
}
niveau.addEventListener("change", afficherCours);
matiere.addEventListener("change", afficherCours);
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
    alert("Votre demande d'inscription a ete préparée !");
    formInscription.reset();
    formulaire.classList.add("hidden");
});
