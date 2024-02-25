# Faire une requête DELETE avec Axios dans React Native

## Configuration Initiale

### Installation d'Axios

Si Axios n'est pas encore installé dans votre projet :

```
npm install axios
```

### Importations Requises

- **Axios** pour les requêtes HTTP :

  ```javascript
  import axios from 'axios';
  ```

- **useState et useEffect** de React pour la gestion de l'état :

  ```javascript
  import { useEffect, useState } from 'react';
  ```

- **Variables d'environnement** pour l'URL de base de l'API :

  ```javascript
  import { API_URL } from '@env';
  ```

## Implémentation de la Requête DELETE

### Préparation de l'ID à Supprimer

Utilisez `useState` pour stocker l'ID de l'élément à supprimer. Cela peut être récupéré grâce à l'interface utilisateur, par exemple, un champ de texte ou sélectionné depuis une liste :

```javascript
const [id, setId] = useState(null); // Stockez l'ID de l'élément à supprimer
```

### Fonction pour la Requête DELETE

Créez une fonction asynchrone qui envoie une requête DELETE à l'API pour supprimer l'élément spécifié par son ID :

```javascript
const nomDeFonction = async () => {
  try {
    // Utilisez axios.delete pour envoyer une requête DELETE à l'API
    const response = await axios.delete(`${API_URL}/suite-url/${id}`);
    // Gérez la réponse ici, par exemple, affichez un message de succès
    console.log("Élément supprimé avec succès", response.data);
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
  }
};
```

### Appel de la Fonction DELETE

Pour déclencher la suppression, vous pouvez appeler `nomDeFonction` lorsqu'une action utilisateur se produit, comme l'appui sur un bouton :

```javascript
// Dans le JSX de votre composant
<button onPress={nomDeFonction}>Supprimer</button>
```

## Points Clés

- **Sécurité de l'URL de l'API** : Stockez l'URL dans un fichier `.env` et accédez-y via `@env` pour maintenir la sécurité de votre application.
- **Gestion de l'ID** : Utilisez `useState` pour stocker et gérer l'ID de l'élément à supprimer.
- **Axios pour DELETE** : Axios simplifie l'envoi de requêtes DELETE, permettant de supprimer facilement des données sur une API.

En suivant ces instructions, vous serez en mesure d'implémenter une fonctionnalité de suppression de données en utilisant Axios dans votre application React Native, tout en assurant la sécurité et l'efficacité de vos requêtes.