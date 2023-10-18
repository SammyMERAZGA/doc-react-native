# Faire une requête PUT/PATCH

Voici comment faire pour une requête PUT/PATCH avec axios dans notre Projet React Native (Expo).

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

**Exemple de code pour modifier des données depuis une API en ligne**

C'est la même chose pour l'utilisation de PUT et de PATCH.

PUT est normalement utilisé pour modifier les données complète.

PATCH est normalement utilisé pour modifier un champ en particulier.


L'URL de l'API n'est pas à mettre en claire dans votre code.

Pour l'utiliser nous la stockerons dans un fichier .env

Pour y faire appel nous utiliserons @env;

Importation de des variables avec @env

```
import { API_URL } from "@env";
```

```
export default function NomFichier(){

  const [nomVar1, setNomVar1] = useState(null) // champ modifier via un TextInput
  const [nomVar2, setNomVar2] = useState(null) // champ modifier via un TextInput
  const [id, setId] = useState(null) // id de ce qu'on modifie

  // création de la fonction
  const nomDeFonction = async () => {
    try{
      const response = await axios.put(`${API_URL}/suite-url/${id}`,
        {
          exp1: nomVar1,
          exp2: nomVar2
        }); // axios.put(url, {données à envoyer})
    }
    catch (error) {
      console.error("Erreur lors de la requête :", error);
    }

  // appel de la fonction dans un bouton de formulaire par exemple
  }
}
```