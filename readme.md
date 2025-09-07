# 01 – Intelligence Artificielle pour le Web  | TOXICITY

## Présentation  
Ce projet consiste à réaliser une **page web interactive intégrant une intelligence artificielle légère** afin d’enrichir l’expérience utilisateur.  
J’ai choisi d’utiliser **TensorFlow.js** avec le modèle pré-entraîné **toxicity**, qui permet d’analyser un texte et de détecter les propos toxiques (insultes, menaces, discours haineux, etc.).  

---

## 1. Technologie ou API IA utilisée  
J’ai utilisé **TensorFlow.js**, une bibliothèque JavaScript permettant d’exécuter des modèles d’intelligence artificielle directement dans le navigateur.  
Le modèle choisi est **toxicity**, déjà entraîné, qui évalue la toxicité d’un texte et renvoie différentes catégories de classification avec leurs scores.  

---

## 2. Choix d’intégration dans la page web  
- L’intégration est **100 % côté client** : l’utilisateur saisit une phrase en anglais dans un formulaire.  
- Le modèle “toxicity” analyse le texte et affiche dynamiquement les résultats (catégories détectées, scores et conseils).  
- L’interface est volontairement **simple, responsive et accessible** (desktop/mobile).  
- Ce choix permet de garantir la **confidentialité des données** (aucune donnée envoyée sur un serveur externe) et de simplifier le déploiement.  

---

## 3. Difficultés rencontrées et solutions adoptées  
- **Choix du modèle** : Il m'étais difficile de trouver une idée pertinente et réalisable rapidement donc la solution -> : sélection du modèle “toxicity” car il est léger, documenté et adapté pour un rendu comme celui-ci.  
- **Langue** : le modèle est entraîné principalement sur des données en anglais donc j'ai du imposer/restreindre l’analyse en anglais afin d’obtenir des résultats fiables.  
- **Performances** : le chargement du modèle peut être un peu long, j'ai ajouté pour cela d’un état “chargement” et gestion des erreurs (réseau/API) pour informer l’utilisateur.  

---

## 4. Réflexion sur l’impact de l’IA sur l’expérience utilisateur  
L’intégration d’une IA comme **toxicity** apporte une valeur ajoutée immédiate :  
- Retour en temps réel sur le contenu saisi.  
- Sensibilisation à la qualité du langage et encouragement à adopter un ton plus respectueux.  
- Expérience interactive, ludique et pédagogique.  

Néanmoins, il faut rester conscient des **limites** :  
- Le modèle n’est pas aussi performant en français.  
- Certaines phrases ambiguës peuvent être mal interprétées.  

L’IA doit donc être perçue comme un **outil d’assistance** qui accompagne l’utilisateur, et non comme une vérité absolue.  

---

## Démo  
VIDEO DEMO : 
- https://github.com/By-Kvn/m1-rattrapages-labatte-kevin/releases/download/v1.0.0/Toxicity-demo.mov
  

---

## Auteur  
**Kevin Labatte**  
