# Les Hooks en React Native

Les hooks en React Native sont des outils qui permettent à des fonctions simples d'avoir accès à des capacités avancées, comme garder en mémoire des données ou réagir à des changements. Ils rendent votre code plus facile à lire et à maintenir. Voici une explication plus simple de quelques hooks courants et leur utilisation avec des exemples commentés.

## Hooks Expliqués Simplement

### `useEffect` : Pour Réagir aux Changements

- **Utilisation** : `useEffect` sert à faire quelque chose après que le composant s'affiche ou se met à jour. Par exemple, vous pouvez l'utiliser pour récupérer des données dès que votre composant est prêt.
- **Exemple** : Mettons en place une horloge qui se met à jour chaque seconde.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function Horloge() {
  // On crée une variable d'état pour l'heure actuelle
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    // Crée un intervalle qui met à jour l'heure chaque seconde
    const interval = setInterval(() => {
      setHeure(new Date()); // Met à jour l'heure
    }, 1000);

    // Nettoie l'intervalle quand le composant est retiré de l'affichage
    return () => {
      clearInterval(interval);
    };
  }, []); // Le tableau vide signifie que l'effet ne dépend d'aucune variable d'état

  // Affiche l'heure actuelle
  return (
    <View>
      <Text>Heure actuelle : {heure.toLocaleTimeString()}</Text>
    </View>
  );
}
```

### `useContext` : Pour Accéder à des Données Partagées

- **Utilisation** : `useContext` permet à vos composants d'accéder à des données partagées sans les passer explicitement en props.
- **Exemple** : Utilisons un thème partagé dans l'application.

```javascript
import React, { useContext } from 'react';
import { Text } from 'react-native';

const ThemeContext = React.createContext('light'); // Valeur par défaut du thème

function ThemedText() {
  const theme = useContext(ThemeContext); // Accède au thème actuel

  // Affiche un texte selon le thème choisi
  return <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>Thème : {theme}</Text>;
}
```

### `useRef` : Pour Référencer des Éléments

- **Utilisation** : `useRef` est utilisé pour garder une référence à un élément ou une valeur sans provoquer de rendu supplémentaire.
- **Pourquoi** : Très utile pour accéder à un élément de l'interface utilisateur directement ou garder une valeur constante entre les rendus.

### `useCallback` et `useMemo` : Pour Optimiser les Performances

- **useCallback** renvoie une fonction qui ne change pas entre les rendus, évitant ainsi des recalculs inutiles.
- **useMemo** sauvegarde le résultat d'une fonction coûteuse à exécuter.

Ces hooks aident votre application à fonctionner plus rapidement en évitant du travail inutile.

## Conclusion

Les hooks `useState`, `useEffect`, `useContext`, `useCallback`, et `useMemo` simplifient la création de composants fonctionnels dynamiques. En les maîtrisant, vous pouvez rendre vos applications plus efficaces et réactives.