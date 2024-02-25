# Réutilisation d'un composant et utilisation des props

Dans React Native, la réutilisation des composants et l'utilisation des props sont des concepts fondamentaux pour construire des interfaces utilisateur dynamiques et réutilisables. Voyons cela plus en détail.

## Réutilisation d'un composant

**Pourquoi réutiliser un composant ?**

La réutilisation d'un composant aide à maintenir la cohérence dans l'application, facilite la maintenance du code, et améliore la productivité en évitant la redondance.

**Comment réutiliser un composant ?**

Supposons que vous avez créé un composant `MonComposant`. Pour l'utiliser dans une page, importez-le :

```javascript
import MonComposant from "./components/MonComposant";
```

Puis, insérez-le dans le rendu de votre composant comme suit :

```javascript
<MonComposant />
```

Il s'agit ici du composant qu'on a vu lors de la création d'un composant à la page précédente. De cette manière, le composant affichera le texte "Mon Composant".

## Les Props

Les props (ou propriétés) permettent de passer des données d'un composant parent à un composant enfant, rendant ce dernier dynamique et configurable.

**Exemple d'utilisation des props**

Supposons que vous ayez un composant ComposantParent qui doit afficher un message :

```javascript
const ComposantParent = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
```

Dans cet exemple, message est une prop que ComposantParent attend de recevoir de son parent.

Pour utiliser ComposantParent et lui passer un message, faites comme suit dans un autre composant (par exemple, App.js) :

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import ComposantParent from './components/ComposantParent';

const App = () => {
  return (
    <View>
      <ComposantParent message="Salut, c'est le composant parent !" />
    </View>
  );
};

export default App;
```

Dans cet exemple, `App` passe une chaîne de caractères à `ComposantParent` via la prop `message`. `ComposantParent` utilise ensuite cette prop pour afficher le message.

## Conclusion
L'utilisation des props est essentielle pour construire des composants personnalisables et réutilisables en React Native. Elle permet aux composants de recevoir et d'afficher des données dynamiques, facilitant ainsi la création d'interfaces utilisateur complexes et interactives.