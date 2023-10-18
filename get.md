# Faire une requête GET

Voici comment faire pour une requête GET avec axios dans notre Projet React Native (Expo).

## Utilisation

Nous utiliserons les useState, useEffect pour stocker les données récupérés.

**Importation d'axios dans un fichier**

```
import axios from “axios”;
```

**Importation de useEffect et useState**

```
import { useEffect, useState } from "react";
```

**Exemple de code pour récupérer des données depuis une API en ligne**

```
export default function NomFichier(){

  const [nomVar, setNomVar] = useState(null) // création de la variable de stockage

  // création de la fonction
  const nomDeFonction = async () => {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // axios.get(url)
      setData(response.data); // stockage des données dans une variable useState, ne pas oublier '.data'
    }
    catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  }

  // appel de la fonction au lancement de la page

  useEffect(() => {
    nomDeFonction()
  }, []);
}
```