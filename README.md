# P&G Strategic Diagnostic Dashboard

Tableau de bord interactif statique en français, conçu comme support complémentaire à la présentation **Procter & Gamble - Analyse Organisationnelle & Stratégique**.

L'identité visuelle suit le fichier de présentation fourni : en-têtes bleu marine, accents dorés, cartes KPI crème, blocs gris clair, logo circulaire P&G stylisé et mise en page académique/corporate.

## Technologies utilisées

- HTML5 sémantique
- CSS3 responsive
- JavaScript vanilla
- Chart.js via CDN
- Google Fonts : Roboto Condensed et Inter

## Lancer localement

Ouvrir directement `index.html` dans un navigateur.

Aucun backend, aucune base de données et aucune étape de build ne sont nécessaires.

## Déployer sur GitHub Pages

1. Créer un dépôt GitHub.
2. Ajouter les fichiers `index.html`, `style.css`, `script.js` et `README.md`.
3. Aller dans `Settings` -> `Pages`.
4. Choisir `Source: Deploy from branch`.
5. Sélectionner `Branch: main` et le dossier `/root`.
6. Ouvrir le lien GitHub Pages généré.

## Structure du dossier

```text
pg-strategic-diagnostic-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Mettre à jour les données

- Les données financières Chart.js sont dans `script.js`, fonction `createCharts()`.
- Les informations DAS/FCS sont dans le tableau `dasData`.
- Les éléments SWOT sont dans le tableau `swotData`.
- Les recommandations du simulateur sont dans le tableau `recommendations`.
- Les textes statiques des sections de cours, diagnostic, BPR et synthèse sont dans `index.html`.

## Notes

Le site est prévu pour GitHub Pages et fonctionne aussi par ouverture directe du fichier `index.html`. Les interactions principales sont le détail des DAS, l'expansion SWOT et le classement dynamique des recommandations stratégiques.
