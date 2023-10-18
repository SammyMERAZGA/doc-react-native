# la Gestion des Hooks

## Les Hooks

Les hooks sont des fonctions spéciales qui permettent aux composants fonctionnels de React Native d'accéder à l'état et à d'autres fonctionnalités auparavant réservées aux composants de classe.

### Les differents Hooks

**_useEffect_** :
Le hook useEffect permet de gérer les effets secondaires dans un composant fonctionnel. Il est utilisé pour exécuter du code après le rendu initial du composant ou après chaque mise à jour de l'état ou des props.

**_useContext_** :
Le hook useContext permet d'accéder au contexte d'une application React. Les contextes sont utilisés pour partager des données entre plusieurs composants sans avoir à les transmettre manuellement via les props.

**_useRef_** :
Le hook useRef permet de créer des références à des éléments DOM ou à des valeurs persistantes qui ne provoquent pas de nouvelle rendu lorsque leur valeur change. Il est souvent utilisé pour accéder aux éléments DOM directement.

**_useCallback_** et **_useMemo_** :
useCallback renvoie une fonction mémorisée, tandis que useMemo renvoie une valeur mémorisée. Ils sont utilisés pour optimiser les performances en évitant le recalcul inutile de valeurs calculées ou en évitant de recréer des fonctions lors de chaque rendu.

**Exemple d'Utilisation de useEffect**

```
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function Horloge() {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHeure(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Text>Heure actuelle : {heure.toLocaleTimeString()}</Text>
    </View>
  );
}
```

**Exemple d'Utilisation de useContext**

```
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

// Création d'un contexte pour le thème
const ThemeContext = React.createContext('light');

function ThemedText() {
  const theme = useContext(ThemeContext);

  return <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>Thème : {theme}</Text>;
}
```

**Conclusion**

Les hooks useState, useEffect, useContext , useCallback et useMemo sont des outils puissants pour gérer l'état dans vos composants fonctionnels. Avec une bonne compréhension de ces concepts, vous pourrez développer des applications plus dynamiques et plus conviviales.
