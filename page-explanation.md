# Structure et éléments d'une page React Native expliqués

Dans React Native, une page (ou un écran) est composée de divers éléments et structures, allant au-delà de ce qui est simplement retourné par le composant. Pour illustrer cela, examinons une page exemple complète qui intègre des fonctionnalités communes et expliquons le rôle de chaque partie.

## Page Exemple Complète

```javascript
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

const ExemplePage = ({ navigation }) => {
  // 1. État local
  const [compteur, setCompteur] = useState(0);

  // 2. Effets
  useEffect(() => {
    Alert.alert("Bienvenue sur la page exemple!");
  }, []); // S'exécute une seule fois après le premier rendu

  // 3. Fonctions gestionnaires
  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  // 4. Rendu
  return (
    <View style={styles.container}>
      <Text style={styles.texte}>Compteur: {compteur}</Text>
      <Button title="Incrémenter" onPress={incrementer} />
      <Button
        title="Aller à une autre page"
        onPress={() => navigation.navigate("AutrePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texte: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ExemplePage;
```

## Explication des éléments

### 1. État local (`useState`)

- Utilité : Permet de garder en mémoire des valeurs au sein du composant qui peuvent changer au fildu temps. Par exemple, le compteur dans notre exemple.
- Exemple d'utilisation : `const [compteur, setCompteur] = useState(0);` initialise une variabled'état `compteur` avec une valeur initiale de 0.

### 2. Effets (`useEffect`)

- Utilité : Permet d'exécuter du code en réponse à certaines modifications ou après le rendu ducomposant. Utilisé pour des opérations comme les requêtes de données, les mises à jour manuelles duDOM et les abonnements.
- Exemple d'utilisation : L'`useEffect` dans notre exemple affiche une alerte lorsque la page estchargée pour la première fois.

### 3. Fonctions gestionnaires

- Utilité : Ces fonctions permettent de gérer les actions de l'utilisateur, comme les pressions surun bouton.
- Exemple d'utilisation : La fonction `incrementer` est appelée lorsque l'utilisateur appuie sur lebouton "Incrémenter".

### 4. Rendu

- Utilité : C'est ce que le composant affiche à l'écran. La fonction de rendu retourne des élémentsReact à afficher, basés sur l'état et les props du composant.
- Exemple d'utilisation : Le `return` dans notre exemple retourne un `View` contenant un `Text` pour afficher le compteur et deux `Button`.

En plaçant du code à différents endroits (état, effets, gestionnaires d'événements), vous pouvez contrôler le comportement de votre page et comment elle réagit aux actions de l'utilisateur et au cycle de vie du composant. Cette structure permet une grande flexibilité et modularité dans le développement d'applications React Native.
