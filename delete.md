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

L'URL de l'API n'est pas à mettre en claire dans votre code.

Pour l'utiliser nous la stockerons dans un fichier .env

Pour y faire appel nous utiliserons @env;

Importation de des variables avec @env

```
import { API_URL } from "@env";
```

```
export default function NomFichier(){

  const [id, setId] = useState(null)

  // création de la fonction
  const nomDeFonction = async () => {
    try{ // ajout de l'id pour spécifier ce qu'on supprime
      const response = await axios.delete(`${API_URL}/suite-url/${id}`);
    }
    catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  }
}
```