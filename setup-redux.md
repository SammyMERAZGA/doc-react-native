# Guide d'Installation et de Configuration de Redux pour React Native

Redux est un outil qui aide à organiser comment votre application sauvegarde et change ses données. C'est très utile pour des applications React Native, rendant le suivi de vos données plus clair et plus simple. Voici un guide pas à pas pour démarrer avec Redux, rendu plus accessible pour les débutants.

## Qu'est-ce que Redux ?

Imaginez Redux comme une grande boîte où vous gardez toutes les données dont votre application a besoin. Chaque fois qu'une partie de votre application veut changer quelque chose dans la boîte, elle envoie une note (une action) qui dit quoi changer. Redux s'assure que cette modification est faite correctement et que tout reste organisé.

## Premiers Pas

Avant de commencer, assurez-vous que vous avez déjà mis en place votre projet React Native.

### Installation de Redux

Ouvrez votre terminal et entrez les commandes suivantes pour ajouter Redux et React-Redux à votre projet :

```bash
npm install redux react-redux
```

### Pourquoi Redux Toolkit ?

Redux Toolkit est un ensemble d'outils qui simplifie encore plus l'utilisation de Redux. Il est recommandé pour rendre les choses plus faciles, surtout si vous débutez.

```bash
npm install @reduxjs/toolkit
```

## Mettre en Place les Bases

### Créer un service

Un réducteur est une fonction qui décide comment l'état de votre application change. Voici un exemple simple :

```javascript
// services/SessionService.ts
import axios, { AxiosRequestConfig } from "axios";
import { Session } from "../entities";

type UserId = number;

const apiUrl: string | undefined = process.env.EXPO_PUBLIC_API_URL;

export default async function SessionService(
  userId: UserId,
  token: string
): Promise<Session[]> {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${apiUrl}/api/session/favorite/${userId}`,
      config
    );
    return response.data as Session[];
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
    throw error;
  }
}
```

### Créer un Réducteur

Un réducteur est une fonction qui décide comment l'état de votre application change. Voici un exemple simple :

```javascript
// stores/slices/sessionSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SessionState {
  sessionFavorites: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SessionState = {
  sessionFavorites: [],
  loading: false,
  error: null,
};

export const fetchSessionFavorites = createAsyncThunk(
  "session/fetchSessionFavorites",
  async (userId: number) => {
    const apiUrl: string | any = process.env.EXPO_PUBLIC_API_URL;

    try {
      const api = axios.create({
        baseURL: apiUrl,
      });

      const response = await api.get(`/api/session/favorite/${userId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSessionFavorites.fulfilled, (state, action) => {
        state.sessionFavorites = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSessionFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSessionFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "Une erreur s'est produite lors de la récupération des favoris de session.";
      });
  },
});

export default sessionSlice.reducer;

export const selectAllSessionFavorites = (state: any) =>
  state.session.sessionFavorites;
```

### Vérifier si la fonction marche

Essayer d'afficher les données sur notre console en appelant la fonction dans une vue.

Ne pas oublier les imports et d'utiliser la fonction dans un bouton par exemple.

```javascript
// stores/slices/sessionSlice.ts
const [sessionFavorites, setSessionFavorites] = useState<any[]>([]);

  const handleButtonClick = async () => {
    try {
      const favorites = await SessionService(
        2,
        "VOTRE_TOKEN"
      );
      setSessionFavorites(favorites);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des favoris de session :",
        error
      );
    }
  };

  useEffect(() => {
    console.log("Nouvelles données de sessionFavorites:", sessionFavorites);
  }, [sessionFavorites]);
```

### Configurer le Store

Le store est l'endroit où vous stockez l'état de votre application. Utilisons notre réducteur pour créer le store :

Avec Redux Toolkit :

```javascript
import { configureStore } from "@reduxjs/toolkit";
// SLICES
import navReducer from "./slices/navSlice";
import sessionReducer from "./slices/sessionSlice";

// CE FICHIER EST UN EXEMPLE

export const store = configureStore({
  reducer: {
    nav: navReducer,
    session: sessionReducer,
  },
});
```

## Connecter Redux à React Native

Pour que vos composants React Native puissent utiliser le store Redux, entourez votre application avec le composant `Provider` :

```javascript
import { Provider } from "react-redux";
import store from "./pathToYourStore"; // Assurez-vous d'importer votre store

function App() {
  return (
    <Provider store={store}>
      <YourReactComponent />
    </Provider>
  );
}
```

## Pour Résumer

Voilà ! Vous avez configuré Redux dans votre projet React Native. Vous êtes prêt à utiliser Redux pour gérer l'état global de votre application de manière efficace. Commencez à créer des actions pour changer l'état et connectez vos composants au store pour réagir à ces changements.
