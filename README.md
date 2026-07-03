# Dedalis - Site Web

Site web vitrine pour Dedalis, bureau d'etudes technique specialise en impression 3D beton.

## Structure du projet

```
.
├── index.html          # Page principale (single-page)
├── styles.css          # Styles CSS
├── assets/
│   └── images/
│       └── logo.svg    # Logo de Dedalis (a remplacer)
└── README.md
```

## Couleurs principales

- **Blanc pur** : `#ffffff`
- **Noir graphite** : `#1c1c1c`
- **Gris aube** : `#dde3e9`
- **Bleu outremer** : `#003366`

## Deployment

Le site est concu pour etre deplie sur Infomaniak:

1. Importer le depot GitHub dans Infomaniak (Hébergement Web > Fichiers > Importer depuis GitHub)
2. Selectionner la branche `main` ou `develop`
3. Lier le dossier a votre domaine `dedalis.fr`

## Personnalisation

### Logo
Remplacez `assets/images/logo.svg` par votre logo officiel.

### Contenu
Modifiez directement les sections dans `index.html`.

### Styles
Les styles sont dans `styles.css`. Les variables CSS sont definies en haut du fichier.

## Branches

- `main` : Version stable
- `develop` : Version en developpement

## Outils utilises

- **Polices** : Inter (Google Fonts)
- **Design** : Responsive (mobile, tablette, desktop)