# Configuration du router

## Dans cette page, vous aurez un exemple de code pour du react native pour configurer votre router

Nous allons utiliser la fonction useNavigation() qui se trouve dans la librairie react-navigation/native.
La fonction useNavigation() est un hook fourni par la bibliothèque React Navigation, qui est utilisée pour la gestion de la navigation dans les applications React Native.

**Importer useNavigation depuis la librairie**
Il faut d'abord importer useNavigation dans votre fichier

```
import { useNavigation } from "@react-navigation/native";

```

Ensuite l'utiliser dans votre composant et gérer quand la navigation est déclencher

```

const NavOptions = () => {
  const Navigation = useNavigation();
  return (

          onPress={() => {
            Navigation.navigate(item.screen);
          }}
        >
  )
};
export default NavOptions;
```

**Ensuite gérer votre navigation depuis votre fichier principal**

Il faut d'abord importer NavigationContainer et createStackNavigator dans votre fichier

```
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
```

Ensuite l'utiliser dans votre composant

```

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {
const Stack = createStackNavigator();

return (
<Provider store={store}>
<NavigationContainer>
<SafeAreaProvider>
<Stack.Navigator>
</Stack.Navigator>
</SafeAreaProvider>
</NavigationContainer>
</Provider>
);
}

```
