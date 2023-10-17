# Utilisation de Tailwind dans vos composants

## Utilisation dans vos composants React Native

```
import React from 'react';
import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => {
  return (
    <View style={tailwind('h-full justify-center items-center')}>
      <Text style={tailwind('text-xl text-blue-500')}>Bonjour, React Native avec Tailwind!</Text>
    </View>
  );
};
export default App;
```

## Exemple 1

Si vous avez déjà un projet basé sur Node.js

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

## Exemple 2

Exemple de composant stylisé avec tailwind

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
          style={tw`p-2 pl-6 pb-8 pt-4 bg-blue-200 m-2 w-40`}
        >
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
```

!["./assets/IMG_1445.jpeg"](assets/IMG_1445.jpeg)

## Exemple 3

À partir de votre fichier de configuration Tailwind, générez un fichier de styles pour React Native:

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
          style={tw`p-2 pl-6 pb-8 pt-4 bg-red-400 m-2 w-40`}
        >
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

```

!["./assets/IMG_1446.jpeg)"](assets/IMG_1446.jpeg)
