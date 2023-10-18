# Faire une requête DELETE

Voici comment faire pour une requête DELETE avec axios dans notre Projet React Native (Expo).

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

**Exemple de code pour supprimer des données depuis une API en ligne**

```
export default function NomFichier(){

  const [id, setId] = useState(null)

  // création de la fonction
  const nomDeFonction = async () => {
    try{
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    } // axios.delete(`url/${id}`)
    catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  }
}
```