# Les Composants en React Native

Cette page abordera l'utilisation des composants en React Native, comment les créer et dans quels buts.

##

**Qu'est ce qu'un composant ?**

Un composant en React Native est un code réutilisable qui représente une partie spécifique de l'interface utilisateur d'une application mobile. il peut contenir
des éléments tels que des boutons, des textes, des images, des formulaires etc.

**Dans quel but ?**

Les composants sont conçus pour faciliter le développement en permettant d'organiser et de personnaliser l'apparence et le comportement de l'application. À savoir
que chaque composant peut être réutiliser au sein d'un projet et imbriquer avec d'autres composants pour créer une interface plus complexe.

**Exemple et explication d'un composant**

```
import { View, Text } from 'react-native'
import React from 'react'

const MonComposant: React.FC = () => {
  return (
    <View>
      <Text>Mon Composant</Text>
    </View>
  );
}

export default MonComposant
```

##

En premier lieu, nous avons les imports. Ici, deux éléments essentiels de la bibliothèque React Native "View" et "Text" ainsi que l'import du module "React" pour un soucis de lisibilité, compatibilité et d'intégration.
```
import { View, Text } from 'react-native'
import React from 'react'
```

##

Dans un deuxième temps, nous avons le corps du composant. Il s'agit là d'une fonction Javascript qui retourne une structure d'interface utilisateur, constituée ici d'une vue ("View") contenant du texte ("Text").
```
const MonComposant: React.FC = () => {
  return (
    <View>
      <Text>Mon Composant</Text>
    </View>
  );
}
```

##

Enfin, pour pouvoir réutiliser le composant ailleurs dans l'application on exporte le composant de la manière ci-dessous.
```
export default MonComposant
```

