# Rapport – IA pour le Web

## 1. Technologie ou API IA utilisée

J’ai choisi d’utiliser **TensorFlow.js**, une bibliothèque JavaScript permettant d’intégrer des modèles d’intelligence artificielle directement dans le navigateur. J'ai choisi le modèle pré-entraîné **toxicity** pour analyser le texte et détecter les propos toxiques (insultes, menaces, etc.)

## 2. Choix d’intégration dans la page web

- L’intégration est 100% côté client : l’utilisateur saisit un texte en anglais dans un formulaire.
- Le modèle “toxicity” analyse le texte et affiche dynamiquement les résultats (tags détectés, conseils, affichage visuel).
- L’interface est simple, responsive et accessible sur desktop/mobile.

Ce choix garantit la confidentialité des données (rien n’est envoyé sur un serveur) et simplifie le déploiement.

## 3. Difficultés rencontrées et solutions adoptées

- **Idée de projet** : Difficile au départ de trouver une idée pertinente et réalisable avec TensorFlow.js.
- **Modèles disponibles** : Beaucoup de modèles sont orientés image ou complexes à intégrer.
- **Langue** : Le modèle “toxicity” fonctionne surtout en anglais, ce qui limite l’analyse pour le français.
- **Solution** : Choix du modèle “toxicity” car il est bien documenté, facile à intégrer et adapté à une démo IA simple, idéal pour un sujet de rattrapages.

## 4. Réflexion sur l’impact de l’IA sur l’expérience utilisateur

L’intégration d’une IA côté client enrichit l’expérience utilisateur :

- Retour immédiat sur le contenu saisi (détection de propos toxiques).
- Sensibilisation à la qualité du langage et encouragement à des échanges plus respectueux.
- Amélioration de l’interactivité et de la personnalisation, tout en restant vigilant sur les limites (langue, précision du modèle).


Kevin LABATTE