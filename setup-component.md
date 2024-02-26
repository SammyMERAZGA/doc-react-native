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

// Définition de la structure des props pour le composant MonComposant
interface MonComposantProps {
  // Aucune prop pour cet exemple
}

const MonComposant: React.FC<MonComposantProps> = () => {
  // Retourne une vue contenant un texte
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

Deuxièmement parlons de cette partie là : 
```
// Définition de la structure des props pour le composant MonComposant
interface MonComposantProps {
  // Aucune prop pour cet exemple
}
```

En TypeScript, lors de la création d'un composant React, on peut définir une interface qui spécifie la structure attendue des propriétés (props) que le composant peut recevoir. Une interface est simplement un moyen de déclarer le type des propriétés et d'ajouter une couche de sécurité et de documentation au code.

Dans cet exemple spécifique (`interface MonComposantProps {}`), l'interface `MonComposantProps` est définie pour indiquer qu'aucune propriété n'est attendue pour ce composant. Cela signifie que lorsque vous utilisez ce composant, vous ne devez pas fournir de propriétés spécifiques.

Si, à l'avenir, vous souhaitez ajouter des propriétés au composant (par exemple, des données dynamiques à afficher), vous pouvez les définir à l'intérieur de cette interface. Cela peut ressembler à ceci :

```
interface MonComposantProps {
  message: string;
  isActive: boolean;
  // ... d'autres propriétés
}
```

Ainsi, le composant `MonComposant` pourrait accepter des propriétés comme `message` (une chaîne de caractères) et `isActive` (un booléen), et vous seriez tenu de les fournir lorsque vous utilisez le composant. Cela aide à rendre le code plus prévisible et à éviter les erreurs de type.

##

Dernièrement, nous entrons dans le corps du composant. Ici, nous définissons la fonction qui représente notre composant. Observons de plus près cette déclaration :
```
const MonComposant: React.FC<MonComposantProps> = () => {
  // Contenu du composant
  return (
    <View>
      <Text>Mon Composant</Text>
    </View>
  );
}
```

1. `const MonComposant: React.FC<MonComposantProps>` :

- Nous déclarons une constante `MonComposant` qui est de type `React.FC` (Functional Component) avec des propriétés (props) de type `MonComposantProps`. Cela signifie que notre composant est une fonction React qui attend certaines propriétés définies par `MonComposantProps`.


2. `() => { ... }` :

- C'est la fonction du composant elle-même. Cette fonction est une fonction fléchée sans paramètres ici, car nous n'avons pas défini de propriétés dans `MonComposantProps`.

3. `return (...)` :

- À l'intérieur de cette fonction, nous retournons la structure de l'interface utilisateur du composant. Dans cet exemple, le composant est constitué d'une balise `<View>` qui encapsule une balise `<Text>` contenant le texte "Mon Composant".

En résumé, cette partie du code définit la fonction principale du composant. L'utilisation de TypeScript avec `React.FC<MonComposantProps>` permet une vérification statique des types, ce qui signifie que le composant s'attend à recevoir des propriétés spécifiques et renvoie un élément JSX correspondant.

##

Enfin, pour pouvoir réutiliser le composant ailleurs dans l'application on exporte le composant de la manière ci-dessous.
```
export default MonComposant
```

En ajoutant TypeScript, on introduit une couche de typage pour améliorer la robustesse et la lisibilité du code. La structure des props est définie pour indiquer quelles données peuvent être passées en tant que propriétés au composant.
