Un application web interactive qui utilise l'intelligence artificielle pour classifier et identifier les objets présents dans vos images.

## 🎯 Fonctionnalités

- **Classification d'images** : Téléchargez une image et obtenez instantanément l'objet détecté
- **Confiance du modèle** : Visualisez le pourcentage de confiance de la prédiction
- **Interface intuitive** : Design moderne et responsive avec Bootstrap
- **IA en temps réel** : Utilise le modèle MobileNet via ml5.js

## 🛠️ Technologies utilisées

- **HTML5** : Structure de la page
- **CSS3** : Style et animations personnalisées
- **JavaScript** : Logique de l'application
- **Bootstrap 5** : Framework CSS pour le design responsive
- **ml5.js** : Bibliothèque d'apprentissage automatique en JavaScript
- **MobileNet** : Modèle pré-entraîné pour la classification d'images

## 📋 Installation

1. Téléchargez ou clonez le projet
2. Ouvrez le fichier `index.html` dans votre navigateur web
3. Aucune installation ou serveur requis - fonctionne entièrement côté client

## 🚀 Utilisation

1. Cliquez sur **"Sélectionnez une image"**
2. Choisissez une image depuis votre ordinateur (JPG, PNG, GIF, WebP, etc.)
3. Le modèle d'IA charge automatiquement et classifie l'image
4. Consultez les résultats : objet détecté et confiance du modèle

## 📁 Structure du projet

```
ImageClassification/
├── index.html       # Page principale de l'application
├── script.js        # Logique JavaScript (classification et gestion des images)
├── style.css        # Feuille de style personnalisée
├── images/          # Dossier contenant les images de démonstration (optionnel)
└── README.md        # Ce fichier
```

## 🎨 Fichiers principaux

- **index.html** : Contient la structure HTML et les éléments Bootstrap
- **script.js** : Gère l'upload d'image, le chargement du modèle ML5, et l'affichage des résultats
- **style.css** : Styles personnalisés pour l'interface

## ⚠️ Prérequis

- Un navigateur web moderne supportant :
  - ECMAScript 6+
  - FileReader API
  - Fetch API (pour ml5.js)
- Connexion Internet (pour charger les CDN et le modèle MobileNet)

## 📊 Résultats attendus

L'application affiche :
- **Objet détecté** : Le nom de la classe la plus probable (ex: "dog", "car", "laptop")
- **Confiance** : Pourcentage de confiance du modèle (0-100%)

## 🔒 Confidentialité

- Les images sont traitées **localement** dans votre navigateur
- Aucune image n'est envoyée à un serveur externe
- Aucune donnée personnelle n'est collectée

## 👨‍💻 Auteur

Léo Almy - 2026

## 📝 Notes pour la classe

Ce projet démontre :
- L'intégration de bibliothèques externes (ml5.js)
- La gestion des événements JavaScript
- La manipulation du DOM
- L'utilisation d'une API moderne (FileReader)
- Les concepts de programmation asynchrone (Promises)
- L'application du design responsive avec Bootstrap
