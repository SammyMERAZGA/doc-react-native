# Configuration du router

Cette page fournit un exemple de comment configurer votre router dans une application React Native en utilisant la bibliothèque `react-navigation/native`.

## Utilisation du Hook useNavigation

`useNavigation` est un hook fourni par la bibliothèque React Navigation. Un hook est une fonction spéciale qui vous permet d'utiliser les fonctionnalités de React. Dans ce cas, `useNavigation` vous permet de naviguer entre différentes écrans de votre application.

D'abord, vous devez importer `useNavigation` dans votre fichier :

```javascript
import { useNavigation } from "@react-navigation/native";
```

Ensuite, vous pouvez l'utiliser dans votre composant pour gérer les événements de navigation. Voici un exemple d'un composant qui utilise `useNavigation` :

```javascript
const NavOptions = () => {
  const Navigation = useNavigation();

  // La fonction onPress va naviguer vers l'écran associé à l'item
  return (
    // ... votre code de composant ici
    onPress={() => {
      Navigation.navigate(item.screen);
    }}
    // ... votre code de composant ici
  )
};
export default NavOptions;
```

Dans cet exemple, `Navigation.navigate(item.screen);` est utilisé pour naviguer vers un autre écran. `item.screen` doit être le nom de l'écran vers lequel vous voulez naviguer.

## Gestion de la Navigation depuis Votre Fichier Principal

D'abord, vous devez importer `NavigationContainer` et `createStackNavigator` dans votre fichier :

```javascript
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
```

`NavigationContainer` est un composant qui gère l'arbre de navigation de votre application. `createStackNavigator` est une fonction qui fournit un moyen pour votre application de transitionner entre les écrans où chaque nouvel écran est placé au-dessus d'une pile.

Ensuite, vous pouvez les utiliser dans votre composant :

```javascript
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>// ... vos écrans ici</Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
```

Dans cet exemple, `Stack.Navigator` est l'endroit où vous listeriez vos écrans. Chaque composant d'écran vers lequel vous naviguez est ajouté à cette pile.
