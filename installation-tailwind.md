# Préparation de l'environnement pour Tailwind

Tailwind CSS est un framework CSS basé sur des classes utilitaires qui permettent de créer rapidement des designs personnalisés directement dans votre HTML.

## Installation Tailwind CSS via npm ou yarn

Si vous avez déjà un projet basé sur Node.js

**NPM**

```
npm install tailwindcss

```

**YARN**

```
yarn add tailwindcss

```

### Configuration initiale

Créez un fichier de configuration tailwind.config.js:

```
npx tailwindcss init
```

Cela créera un fichier de configuration minimal :

```
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

## Création du fichier de styles

À partir de votre fichier de configuration Tailwind, générez un fichier de styles pour React Native:

```
npx tailwind-rn
```

Cela créera un fichier styles.json dans votre dossier de projet.

## Utilisation dans vos composants React Native

Pour voir comment utiliser tailwind dans vos composants rendez-vous dans la page suivante
