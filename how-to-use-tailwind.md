# Utilisation de Tailwind dans vos composants

## Utilisation dans vos composants React Native

Pour utiliser tailwind dans vos composants , il faut d'abord l'importer dans votre fichier du composant

```
import tw from "tailwind-react-native-classnames";

```

## Exemple 1

Voici un exemple d'utilisation de Tailwind dans un composant.
Dans cette exemple nous avons mis une balise style dans le composant comme vous pouvez le voir en dessous.

Ensuite nous avons personnaliser le style.
Comme par exemple mettre du padding avec p- et le padding que vous souhaitez

ou bien une couleur de fond avec bg- la couleur et la graduation de la couleur.
Mais pour plus de détail sur l'annotation pour le style regarder la documentation de tailwind

https://tailwindcss.com/

```
import { FlatList } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";


const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

```

!["./assets/IMG_1444.jpeg"](assets/IMG_1444.jpeg)
