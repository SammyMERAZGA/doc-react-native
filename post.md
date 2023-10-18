# Faire une requête POST

Voici comment faire pour une requête POST avec axios dans notre Projet React Native (Expo).

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

**Exemple de code pour ajouter des données depuis une API en ligne**

```
export default function NomFichier(){

  const [nomVar1, setNomVar1] = useState(null) // champ modifier via un TextInput
  const [nomVar2, setNomVar2] = useState(null) // champ modifier via un TextInput

  // création de la fonction
  const nomDeFonction = async () => {
    try{
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", 
        {
          exp1: nomVar1,
          exp2: nomVar2
        }); // axios.post(url, {données à envoyer})
    }
    catch (error) {
      console.error("Erreur lors de la requête :", error);
    }

  // appel de la fonction dans un bouton de formulaire par exemple
  }
}
```