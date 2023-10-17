# la Gestion des Hooks

## Les Hooks

Les hooks sont des fonctions spéciales qui permettent aux composants fonctionnels de React Native d'accéder à l'état et à d'autres fonctionnalités auparavant réservées aux composants de classe.

**Les principaux hooks utilisent**

**_useEffect_** :
Le hook useEffect permet de gérer les effets secondaires dans un composant fonctionnel. Il est utilisé pour exécuter du code après le rendu initial du composant ou après chaque mise à jour de l'état ou des props.

**_useContext_** :
Le hook useContext permet d'accéder au contexte d'une application React. Les contextes sont utilisés pour partager des données entre plusieurs composants sans avoir à les transmettre manuellement via les props.

**_useRef_** :
Le hook useRef permet de créer des références à des éléments DOM ou à des valeurs persistantes qui ne provoquent pas de nouvelle rendu lorsque leur valeur change. Il est souvent utilisé pour accéder aux éléments DOM directement.

**_useCallback_** et **_useMemo_** :
useCallback renvoie une fonction mémorisée, tandis que useMemo renvoie une valeur mémorisée. Ils sont utilisés pour optimiser les performances en évitant le recalcul inutile de valeurs calculées ou en évitant de recréer des fonctions lors de chaque rendu.

**Comment les utiliser ?**

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

**Exemple d'Utilisation de useCallback**
useCallback est utilisé pour mémoriser une fonction de rappel (callback) afin d'éviter qu'elle ne soit recréée à chaque rendu du composant. Cela peut améliorer les performances, en particulier lorsque la fonction de rappel est utilisée comme dépendance dans d'autres hooks ou effets.

```
import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

function Compteur() {
  const [count, setCount] = useState(0);

  // Utilisation de useCallback pour mémoriser la fonction de rappel
  const incrementerCompteur = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <View>
      <Text>Compteur : {count}</Text>
      <Button title="Incrémenter" onPress={incrementerCompteur} />
    </View>
  );
}

export default Compteur;
```

Dans cet exemple, nous utilisons useCallback pour mémoriser la fonction incrementerCompteur. Elle ne sera recréée que si la dépendance count change, ce qui peut améliorer les performances lorsque le composant se réaffiche.

**Exemple d'Utilisation de useMemo**

useMemo est utilisé pour mémoriser une valeur calculée afin qu'elle ne soit recalculée que lorsque ses dépendances changent. Cela peut être utile pour éviter des calculs coûteux à chaque rendu du composant

```
import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';

function Compteur() {
  const [count, setCount] = useState(0);

  // Utilisation de useMemo pour mémoriser une valeur calculée
  const doubledCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <View>
      <Text>Compteur : {count}</Text>
      <Text>Le compteur doublé : {doubledCount}</Text>
    </View>
  );
}

export default Compteur;
```

Dans cet exemple, nous utilisons useMemo pour mémoriser la valeur doubledCount. Elle ne sera recalculée que si la dépendance count change, ce qui peut éviter des calculs inutiles lors des rendus du composant.

**Conclusion**

Les hooks useState, useEffect, useContext , useCallback et useMemo sont des outils puissants pour gérer l'état dans vos composants fonctionnels. Avec une bonne compréhension de ces concepts, vous pourrez développer des applications plus dynamiques et plus conviviales.
