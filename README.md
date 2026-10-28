# Nour Academy — Portail d'inscription

## 1. Présentation du projet

**Nour Academy** est un portail web d'inscription destiné aux parents et aux élèves d'un réseau de trois centres de soutien scolaire et de langues situés à Nador :

- Nador Centre
- Hay Al Matar
- Selouane

Le projet a pour objectif de faciliter la recherche des cours, la sélection des matières et l'envoi d'un dossier d'inscription complet depuis un téléphone ou un ordinateur.

L'application permet de réduire les erreurs de saisie et d'améliorer l'expérience des parents grâce à une interface simple, accessible et responsive.

## 2. Objectifs du projet

- Faciliter la consultation du catalogue des cours.
- Permettre le filtrage des cours par niveau scolaire et par matière.
- Permettre aux utilisateurs de sélectionner plusieurs cours.
- Calculer automatiquement le montant mensuel total.
- Vérifier les informations saisies dans le formulaire en temps réel.
- Bloquer l'envoi si le dossier est incomplet ou invalide.
- Afficher un récapitulatif après la confirmation de l'inscription.
- Améliorer l'expérience utilisateur sur mobile et ordinateur.

## 3. Fonctionnalités

### US1 — Consulter le catalogue

- Affichage dynamique des cours à partir d'un tableau JavaScript.
- Présentation du titre, de la matière, du niveau, du créneau, du prix et des places restantes.
- Affichage des prix en MAD par mois.
- Identification des cours complets.
- Désactivation du bouton d'ajout lorsque le cours est complet.

### US2 — Filtrer les cours

- Filtrage par niveau scolaire.
- Filtrage par matière.
- Combinaison des deux filtres sans rechargement de la page.
- Affichage du nombre de résultats.
- Message informatif lorsqu'aucun cours ne correspond aux critères.

### US3 — Composer sa sélection

- Ajout et retrait des cours sélectionnés.
- Prévention des doublons.
- Affichage des cours choisis.
- Calcul automatique du total mensuel en MAD.
- Gestion des boutons avec la délégation d'événements JavaScript.

### US4 — Validation du formulaire

Le formulaire permet de saisir les informations suivantes :

- Nom du parent.
- Adresse e-mail.
- Numéro de téléphone.
- Prénom de l'élève.
- Niveau scolaire de l'élève.
- Mot de passe.
- Confirmation du mot de passe.
- Consentement au traitement des données personnelles.

Les champs sont validés en temps réel à l'aide d'expressions régulières (Regex) et de contrôles JavaScript.

Les validations comprennent notamment :

- Vérification du format de l'adresse e-mail.
- Vérification du numéro de téléphone marocain.
- Vérification de la robustesse du mot de passe.
- Vérification de la correspondance des mots de passe.
- Affichage de messages d'erreur ou de succès sous les champs concernés.

### US5 — Confirmer l'inscription

- Vérification de tous les champs obligatoires.
- Blocage de l'envoi si le formulaire est invalide.
- Vérification de la sélection des cours et du consentement.
- Affichage d'un récapitulatif de l'inscription.
- Génération d'un numéro de dossier unique.
- Réinitialisation du formulaire et de la sélection après confirmation.

**Remarque :** le projet fonctionne côté navigateur. En l'absence de serveur et de base de données, la confirmation affichée correspond à une simulation d'inscription et ne constitue pas un enregistrement administratif sur un serveur.

### Bonus éventuels

- Recherche instantanée par mot-clé.
- Indicateur de robustesse du mot de passe.
- Fenêtre modale affichant les détails d'un cours.
- Formulaire réparti en deux étapes avec une barre de progression.

## 4. Technologies utilisées

- **HTML5** : structure sémantique des pages.
- **CSS3** : mise en page, styles et adaptation responsive.
- **JavaScript natif (Vanilla JavaScript)** : génération dynamique des cartes, filtres, sélection des cours et validation du formulaire.
- **Tailwind CSS v4 avec Vite**, si cette solution est utilisée dans le projet, pour la gestion des styles et de la charte graphique.
- **Git et GitHub** : gestion du code source et du travail collaboratif.
- **GitHub Pages** : déploiement du site statique.
- **Jira ou GitHub Projects** : organisation et suivi des user stories.

Aucune bibliothèque ou aucun framework JavaScript externe n'est nécessaire.

## 5. Organisation du projet

L'organisation des fichiers dépend de la solution CSS choisie.

Exemple d'organisation avec HTML, CSS et JavaScript séparés :

```text
nour-academy-B3/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
├── README.md
└── .gitignore
```

Si le projet utilise Vite et Tailwind CSS, les fichiers peuvent être organisés dans `src/`, avec un fichier CSS et un fichier JavaScript, ainsi qu'un `package.json` et une configuration Vite.

## 6. Responsive Design et accessibilité

Le site adopte une approche **Mobile First** afin de répondre aux besoins des parents qui utilisent principalement leur smartphone.

Les objectifs d'interface sont les suivants :

- Compatibilité avec les écrans de 360 px à 1440 px.
- Absence de défilement horizontal.
- Zones tactiles d'au moins 44 px.
- Formulaires faciles à remplir sur mobile.
- Utilisation de labels explicites pour les champs.
- Messages de validation compréhensibles.
- Navigation et interactions accessibles au clavier.

## 7. Validation des données

Les règles de validation ont été définies pour limiter les erreurs de saisie.

| Champ | Règle de validation |
|---|---|
| Nom du parent | Champ obligatoire |
| E-mail | Format d'adresse e-mail valide |
| Téléphone | Format marocain `06/07XXXXXXXX` ou `+212 6/7XXXXXXXX` |
| Prénom de l'élève | Champ obligatoire |
| Niveau scolaire | Une valeur doit être sélectionnée |
| Mot de passe | Au moins 8 caractères, une majuscule, un chiffre et un caractère spécial |
| Confirmation | Identique au mot de passe |
| Consentement | Case obligatoire, non cochée par défaut |
| Sélection des cours | Au moins un cours doit être sélectionné |

La validation côté navigateur améliore l'expérience utilisateur, mais elle ne remplace pas une validation côté serveur dans une future version de l'application.

## 8. Protection des données personnelles

Le formulaire prévoit un consentement explicite et une mention d'information concernant le traitement des données personnelles, conformément aux principes de la loi marocaine 09-08.

Le projet respecte les principes suivants :

- Consentement non pré-coché.
- Collecte limitée aux informations nécessaires.
- Absence de collecte du numéro de CIN.
- Utilisation de données fictives dans le dépôt GitHub.
- Absence d'envoi des données vers un serveur externe.

## 9. Gestion du projet avec Git et Jira

Le développement est organisé autour des user stories du brief.

Les branches suivent la convention :

```text
feature/<cle-jira>-<description>
```

Exemples :

```text
feature/NOUR-1-catalogue
feature/NOUR-2-filtres
feature/NOUR-3-selection
feature/NOUR-4-validation
feature/NOUR-5-inscription
```

Chaque user story fait l'objet d'une Pull Request décrivant les modifications réalisées et les étapes de test.

La branche `main` est mise à jour par fusion des Pull Requests après vérification du code.

Le suivi des tickets utilise les colonnes suivantes :

- À faire
- En cours
- En revue
- Terminé

## 10. Difficultés rencontrées et solutions

Cette section doit être adaptée aux difficultés réellement rencontrées pendant le développement.

| Difficulté possible | Solution envisagée |
|---|---|
| Générer les cartes de cours dynamiquement | Utiliser un tableau d'objets JavaScript et une fonction de rendu. |
| Combiner les filtres | Appliquer les critères de niveau et de matière sur la même liste de cours. |
| Gérer les boutons après le filtrage | Utiliser la délégation d'événements sur le conteneur des cartes. |
| Éviter les cours en double dans la sélection | Vérifier si le cours existe déjà avant de l'ajouter. |
| Valider les champs en temps réel | Utiliser des expressions régulières et des écouteurs d'événements. |
| Bloquer un formulaire incomplet | Vérifier les champs, la sélection et le consentement avant la confirmation. |
| Adapter l'interface aux petits écrans | Appliquer une approche Mobile First et tester plusieurs largeurs d'écran. |

## 11. Captures d'écran

### Version desktop

Ajouter ici une capture d'écran du site sur ordinateur.

```text
![Nour Academy - Version desktop](images/desktop.png)
```

### Version mobile

Ajouter ici une capture d'écran du site sur smartphone.

```text
![Nour Academy - Version mobile](images/mobile.png)
```

Les fichiers `desktop.png` et `mobile.png` doivent être ajoutés au dossier `images/`.

## 12. Installation et lancement

### Avec HTML, CSS et JavaScript natifs

1. Cloner le dépôt GitHub :

```bash
git clone <URL_DU_DEPOT>
```

2. Entrer dans le dossier du projet :

```bash
cd nour-academy-B3
```

3. Ouvrir `index.html` dans un navigateur.

### Avec Vite et Tailwind CSS v4

Après avoir cloné le dépôt :

```bash
npm install
npm run dev
```

Pour générer la version de production :

```bash
npm run build
```

Les commandes dépendent des scripts définis dans le fichier `package.json`.

## 13. Déploiement

Le projet est destiné à être publié sur **GitHub Pages**.

Lien du dépôt GitHub : **À compléter**

Lien du site en ligne : **À compléter**

Board Jira ou GitHub Projects : **À compléter**

## 14. Tests et Definition of Done

Une user story est considérée comme terminée lorsque :

- Les critères d'acceptation sont vérifiés sur mobile et desktop.
- Les interactions fonctionnent correctement.
- Les validations empêchent l'envoi d'un dossier incomplet.
- La console du navigateur ne contient aucune erreur.
- La Pull Request est décrite, vérifiée et fusionnée.
- Le ticket correspondant est marqué comme terminé.
- La version déployée sur GitHub Pages est à jour.

## 15. Sources et documentation

- [MDN — Introduction au DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — Document.querySelector()](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
- [MDN — EventTarget.addEventListener()](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [MDN — Element.closest()](https://developer.mozilla.org/fr/docs/Web/API/Element/closest)
- [MDN — Event.preventDefault()](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault)
- [MDN — Expressions régulières](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- [MDN — Validation des formulaires](https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation)
- [MDN — Élément HTML dialog](https://developer.mozilla.org/fr/docs/Web/HTML/Element/dialog)
- [GitHub Docs — GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages)
- [Atlassian — Intégration Jira et GitHub](https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-github/)
- [Atlassian — Smart Commits](https://support.atlassian.com/jira-software-cloud/docs/process-issues-with-smart-commits/)
- [CNDP — Commission Nationale de contrôle de la protection des Données à caractère Personnel](https://www.cndp.ma/)

## 16. Auteur

**Nom :** Yassine Aouaj

**Projet :** Nour Academy — Brief 3

**Formation :** YouCode

**Année :** 2026
