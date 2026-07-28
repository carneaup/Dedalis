# Dédalis - Bureau d'études en impression 3D béton

Technical design office specialized in 3D concrete printing

[Website](https://img.shields.io/badge/Website-dedalis.fr-blue)
[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-green)

---

## À propos du projet

Dédalis est un bureau d'études technique fondé en 2026, spécialisé dans la fabrication additive en matériaux cimentaires à grande échelle. Nous accompagnons nos clients de la conception à la fabrication, en passant par les études de faisabilité et le développement d'outils sur mesure.

Notre expertise repose sur 10 ans d'expérience dans le domaine, aussi bien computationnelle qu'opérationnelle.

---

## Structure du projet

Dedalis/
├── index.html              # Site principal (version française)
├── index-en.html           # Site principal (version anglaise)
├── mentions-legales.html   # Mentions légales
├── privacy-policy.html     # Politique de confidentialité
├── styles.css              # Styles CSS communs
├── components/
│   └── bibliographie.js     # Composant bibliographie dynamique
├── data/
│   ├── bibliographie.json   # Données de la bibliographie
│   └── references.json      # Données des références
├── assets/
│   └── images/             # Images du site
│       ├── logo.svg
│       └── Arriere_plan.jpeg
├── README.md
└── .gitignore

---

## Fonctionnalités

### Site Web
- Design responsive : Adapté mobile, tablette et desktop
- Menu déroulant : Navigation intuitive avec icône hamburger
- Sélecteur de langue : Basculer entre FR et EN
- Sections dynamiques : Bibliographie et références chargées depuis JSON
- Formulaire de contact : Fonctionnel via FormSubmit

### Menu de navigation
- Accès rapide à toutes les sections
- Menu hamburger pour une expérience mobile optimale
- Navigation fluide avec défilement automatique

### Contenu dynamique
- Bibliographie : Chargée depuis data/bibliographie.json
  - Thèses
  - Articles scientifiques
  - Projets et références
  - Support des liens DOI, ResearchGate, Wikipedia
- Références : Chargées depuis data/references.json
  - Images intégrées
  - Acteurs impliqués
  - Statut des projets

### Internationalisation
- Deux versions : Française (index.html) et Anglaise (index-en.html)
- Sélecteur de langue intégré dans le header
- Contenu traduit : Toutes les sections disponibles dans les deux langues

### Conformité
- Mentions légales : Informations légales complètes
- Politique de confidentialité : Conforme RGPD
- Formulaire sécurisé : Transmission des données via FormSubmit

---

## Déploiement

### Prérequis
- Un hébergement web (recommandé : Infomaniak)
- Un nom de domaine (ex: dedalis.fr)

### Étapes de déploiement

#### 1. Sur Infomaniak
1. Créer un nouvel hébergement web
2. Lier le nom de domaine dedalis.fr
3. Choisir l'option Site statique
4. Connecter votre dépôt GitHub (branche main)
5. Activer le déploiement automatique

#### 2. Configuration du formulaire
Le formulaire utilise FormSubmit pour envoyer les messages par email :
- Action : https://formsubmit.co/contact@dedalis.fr
- Méthode : POST
- Champs cachés :
  - _subject: Nouveau message depuis dedalis.fr
  - _captcha: false
  - _next: https://dedalis.fr/#contact

#### 3. Mise à jour des liens
Vérifier que les liens dans le footer pointent vers :
- mentions-legales.html
- privacy-policy.html

---

## Personnalisation

### Modifier le contenu
- Texte : Modifier directement dans les fichiers HTML
- Bibliographie : Modifier data/bibliographie.json
- Références : Modifier data/references.json
- Images : Ajouter dans assets/images/ et mettre à jour les chemins

### Ajouter une référence
Dans data/references.json :

json
{
  references: [
    {
      titre: Nouveau projet,
      type: Type de prestation,
      annee: 2026,
      description: Description du projet,
      acteurs: [Client 1, Client 2],
      image: assets/images/nom-image.jpg,
      statut: [En cours]
    }
  ]
}

### Ajouter une publication
Dans data/bibliographie.json :

json
{
  articles: [
    {
      titre: Nouvel article,
      annee: 2026,
      revue: Nom de la revue,
      coauteurs: [Auteur 1, Auteur 2],
      liens: [https://doi.org/...],
      resume: Résumé de larticle
    }
  ]
}

---

## Technologies utilisées

Technologie | Usage
------------- | -------
HTML5 | Structure du site
CSS3 | Styles et design responsive
JavaScript (ES6+) | Fonctionnalités dynamiques
GitHub | Versioning et hébergement du code
FormSubmit | Traitement du formulaire de contact
Infomaniak | Hébergement web recommandé

---

## Charte graphique

Élément | Valeur
--------- | -------
Couleur principale | #003366 (Bleu outremer)
Couleur secondaire | #004488 (Bleu outremer clair)
Couleur de fond | #ffffff (Blanc)
Couleur de texte | #1c1c1c (Noir graphite)
Police | Cascadia Code
Ombre | 0 2px 10px rgba(0,0,0,0.05)

---

## Contact

Email : contact@dedalis.fr
Téléphone : +33 (0)6 49 50 44 08
LinkedIn : Dedalis
Site web : https://dedalis.fr

---

## Licence

Ce projet est sous licence MIT - libre d'utilisation, de modification et de distribution.

---

Dernière mise à jour : Juillet 2026
Version : 1.0.0