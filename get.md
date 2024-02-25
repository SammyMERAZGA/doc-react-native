# Faire une requête GET avec Axios dans React Native

## Mise en place

Pour récupérer des données depuis une API externe dans notre projet React Native, nous allons utiliser Axios, une bibliothèque promise-based pour les requêtes HTTP. Elle simplifie la tâche de communication avec les serveurs HTTP.

### Étapes Préliminaires

1. **Installation d'Axios**

   Assurez-vous d'abord d'avoir Axios disponible dans votre projet :

   ```
   npm install axios
   ```

2. **Importation d'Axios**

   Dans le fichier où vous souhaitez faire votre requête GET, commencez par importer Axios :

   ```javascript
   import axios from "axios";
   ```

3. **Utilisation de `useState` et `useEffect`**

   Pour stocker les données récupérées et gérer le cycle de vie de votre composant :

   ```javascript
   import { useEffect, useState } from "react";
   ```

## Exemple de Requête GET

### Sécurisation de l'URL de l'API

- Pour ne pas exposer directement l'URL de votre API, stockez-la dans un fichier `.env` :
  
  ```
  API_URL=votre_url_api
  ```

- Importez ensuite cette URL dans votre fichier grâce à `@env` :

  ```javascript
  import { API_URL } from "@env";
  ```

### Requête GET avec Axios

Voici comment structurer votre composant pour effectuer une requête GET :

```javascript
export default function NomFichier() {
  const [data, setData] = useState(null); // Création de la variable d'état pour stocker les données

  // Fonction asynchrone pour effectuer la requête GET
  const fetchData = async () => {
    try {
      // Utilisation d'Axios pour la requête, attention à bien encapsuler l'URL avec des backticks (`) si vous injectez une variable
      const response = await axios.get(`${API_URL}/suite-url/`);
      setData(response.data); // Stockage des données récupérées
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  // Exécution de fetchData au chargement du composant
  useEffect(() => {
    fetchData();
  }, []);

  // Ici, vous pouvez retourner votre JSX en utilisant les données stockées dans 'data'
}
```

Dans cet exemple, `fetchData` est une fonction asynchrone qui utilise `axios.get` pour récupérer des données depuis une API et les stocke dans l'état local grâce à `setData`. L'utilisation de `useEffect` sans dépendances (`[]`) assure que la requête se lance au moment où le composant est monté pour la première fois.