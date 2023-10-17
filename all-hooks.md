# la Gestion des Hooks

## Les Hooks

Les hooks sont des fonctions spéciales qui permettent aux composants fonctionnels de React Native d'accéder à l'état et à d'autres fonctionnalités auparavant réservées aux composants de classe.

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
