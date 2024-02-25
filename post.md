# Faire une requête POST avec Axios dans React Native

## Préparation

Avant de commencer, assurez-vous d'avoir Axios dans votre projet. Si ce n'est pas le cas, installez-le :

```
npm install axios
```

## Configuration initiale

### Importations nécessaires

- **Axios** pour les requêtes HTTP :

  ```javascript
  import axios from 'axios';
  ```

- **useState** et **useEffect** de React pour gérer l'état et les effets de bord :

  ```javascript
  import { useEffect, useState } from 'react';
  ```

- **Variables d'environnement** pour sécuriser l'URL de l'API :

  ```javascript
  import { API_URL } from '@env';
  ```

## Implémentation d'une requête POST

### Stockage des données d'entrée

Utilisez `useState` pour gérer les données que vous souhaitez envoyer avec votre requête POST :

```javascript
const [nomVar1, setNomVar1] = useState(null); // Pour le premier champ
const [nomVar2, setNomVar2] = useState(null); // Pour le second champ
```

### Fonction pour la requête POST

Définissez une fonction asynchrone pour effectuer la requête POST en utilisant Axios. Cette fonction prendra les données stockées dans votre état local et les enverra à votre API :

```javascript
const nomDeFonction = async () => {
  try {
    // Utilisation d'Axios pour envoyer une requête POST à l'API
    const response = await axios.post(`${API_URL}/suite-url/`, {
      exp1: nomVar1,
      exp2: nomVar2
    });

    // Gestion de la réponse ici, par exemple en mettant à jour l'état avec les données reçues
    console.log(response.data);
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
  }
};
```

### Déclenchement de la requête

Pour envoyer la requête POST, par exemple suite à une action utilisateur comme un appui sur un bouton, vous pouvez appeler `nomDeFonction` :

```javascript
// Dans le JSX de votre composant, ajoutez un bouton ou tout autre élément interactif
<button onPress={nomDeFonction}>Envoyer les données</button>
```

## Points Clés

- **Sécurisation de l'URL** : L'URL de votre API est stockée de manière sécurisée dans un fichier `.env` et accédée via `@env`.
- **Axios pour les requêtes POST** : Axios simplifie l'envoi de requêtes HTTP, y compris les requêtes POST avec des données.
- **Gestion de l'état et des actions utilisateur** : React Native `useState` est utilisé pour gérer les entrées utilisateur, et la requête POST est déclenchée par une action utilisateur (par exemple, un appui sur un bouton).

En suivant ces étapes, vous pouvez intégrer efficacement une requête POST dans votre application React Native, en envoyant des données à une API tout en maintenant la sécurité et la structure de votre code.