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
// services/session/SessionService.ts
import axios, { AxiosRequestConfig } from "axios";

type UserId = number;

const apiUrl: string | undefined = process.env.EXPO_PUBLIC_API_URL;

export default async function getAllSessionFavoriteByUserId(
  userId: UserId,
  token: string
): Promise<any[]> {
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
    return response.data.data.sessionFavorites as any[];
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
    throw error;
  }
}
```

### Créer un Réducteur

Un réducteur est une fonction qui décide comment l'état de votre application change. Voici un exemple simple :

```javascript
// stores/slices/session/sessionSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface SessionState {
  sessionFavorites: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SessionState = {
  sessionFavorites: [], // la variables qui stock les données de récupérer via l'API ne pas oublier de typer avec une entité, si l'entité n'exsite pas créer l'entité
  loading: false,
  error: null,
};

export const fetchSessionFavorites = createAsyncThunk(
  "session/fetchSessionFavorites",
  async (params: { userId: number, token: string }) => {
    // mettre les paramètres attendus de cette manière
    const response: any = await getSessionService(params.userId, params.token); // faire appel à la fonction créé précédement dans le fichier service
    return response; // retourner les données attendues  (vérifier avec un console.log() quand on test sur sur une page)
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

### Configurer le Store

Le store est l'endroit où vous stockez l'état de votre application. Utilisons notre réducteur pour créer le store :

Avec Redux Toolkit :

```javascript
// stores/store.ts
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

(PS Fabien le demi-boss)

### Vérifier si la fonction marche

Essayer d'afficher les données sur notre console en appelant la fonction dans une vue.

Ne pas oublier les imports et d'utiliser la fonction dans un bouton par exemple.

```javascript
// screens/Home/Home.tsx
  const dispatch = useDispatch<any>();
  const sessions = useSelector(selectAllSessionFavorites);
  const [sessionFavorites, setSessionFavorites] = useState<any[]>([]);

  const handleButtonClick = async () => {
    dispatch(fetchSessionFavorites({"userId": 2/*2 est un exemple*/, "token": "VOTRE_TOKEN"}));
    setSessionFavorites(sessions)
    console.log(sessions)
  };

  useEffect(() => {
    console.log("Nouvelles données de sessionFavorites:", sessionFavorites);
  }, [sessionFavorites]);
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
