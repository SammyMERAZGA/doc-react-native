# Utilisation de Tailwind dans vos composants

## Utilisation dans vos composants React Native

Pour utiliser tailwind dans vos composants , il faut d'abord l'importer dans votre fichier du composant

```
import tw from "tailwind-react-native-classnames";

```

## Exemple 1

Voici un exemple d'utilisation de Tailwind dans un composant Text.

Nous allons utiliser tw qui est importer au dessus et mettre une balise style dans le composant

Dans cette exemple nous avons créer un text qui sera en gris avec de la marge et du padding

Avec text-gray-500 pour la couleur du text , p-2 pour le padding et m-2 pour la marge

```
        <Text
          style={tw`p-2 text-gray-500 m-2 `}
        >
        </Text>

```

## Les Classes Tailwind

Ils existent différentes classes tailwind :

p- : gére le padding du composant

m- : la marge du composant

w- : la width du composant

text-couleur(ex:blue)-intensite(ex:400) : pour gérer la couleur du text

flex-row: Utilisez flex-row pour positionner les éléments flex horizontalement dans la même direction.

Ils existent plusieurs autres classes tailwind qui peuvent aider à personnaliser le composant selon vos attentes.
Pour sa demandez-vous sur la doc tailwind

https://tailwindcss.com/
