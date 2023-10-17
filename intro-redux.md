# Guide d'installation et utilisation de Redux pour React Native

## Introduction à Redux
Redux est une bibliothèque de gestion d'état pour les applications JavaScript. Il vous permet de gérer l'état de votre application dans un seul objet, appelé "store". Redux est particulièrement utile pour les applications React Native (et React) car il offre une manière prévisible de gérer et de mettre à jour l'état de l'application.

## Installation
Prérequis :
Avoir React Native installé et un nouveau projet React Native initialisé.
Étapes d'installation :
Installer Redux et React-Redux :
```bash
npm install redux react-redux
```
(Optionnel) Installer Redux Toolkit qui simplifie le code Redux :
```bash
npm install @reduxjs/toolkit
```

## Concepts clés de Redux
### Store: Le "magasin" global qui contient l'état de votre application.

### Actions (Les Demandes)
Explication:
Les actions sont des paquets d'informations que vous souhaitez envoyer au store. Ils doivent toujours avoir une propriété type pour indiquer le type d'action à effectuer.

Exemple:

Pour une action qui souhaite augmenter un compteur:
```javascript
const incrementAction = {
  type: 'INCREMENT'
};
```

### Reducers (Les Gardiens)
Explication:
Un reducer est une fonction qui prend l'état actuel et une action, puis retourne le nouvel état. Les reducers doivent être purs, ce qui signifie qu'ils ne modifient pas l'état actuel, mais produisent plutôt un nouvel état.

Exemple:

Pour un réducteur qui gère un compteur:

```javascript
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

Middleware: Un moyen d'intercepter les actions avant qu'elles n'atteignent le réducteur.

## Configuration de base
Créer un réducteur
Un réducteur est une fonction qui prend l'état actuel et une action, puis renvoie un nouvel état.
```javascript
// reducers/todos.js
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}

export default todos;
```

## Store
Explication:
Le store est l'objet qui regroupe l'état de votre application. Vous pouvez considérer cela comme un conteneur pour l'état de votre app.

Exemple:

Création d'un store pour une application de compteur :

```javascript
import { createStore } from 'redux';

const store = createStore(counterReducer);
```

### Connectez le Coffre-fort à votre application
Explication:
Pour que vos composants React Native interagissent avec le store, vous les enveloppez avec le composant Provider de react-redux.

Exemple:

```javascript
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <YourReactComponent />
    </Provider>
  );
}
```

## Interaction avec le Store depuis un composant
Explication:
Les composants peuvent récupérer des données du store et envoyer des actions pour modifier l'état du store.

Exemple:

```javascript
import { useDispatch, useSelector } from 'react-redux';

function CounterComponent() {
  // Pour envoyer des actions au store
  const dispatch = useDispatch();

  // Pour sélectionner une valeur du store
  const count = useSelector(state => state.count);

  return (
    <button onPress={() => dispatch(incrementAction)}>
      J'ai été cliqué {count} fois.
    </button>
  );
}
```

## Points clés à retenir
Gardez vos réducteurs purs. N'effectuez pas d'effets secondaires dans vos réducteurs.
L'état de Redux est immuable. N'apportez jamais de modifications directement à l'état. Renvoyez toujours un nouvel état.
Planifiez la structure de votre état à l'avance. Cela facilite la gestion de l'état plus tard.
Si vous trouvez Redux compliqué, envisagez d'utiliser Redux Toolkit pour simplifier la logique et réduire le code.

## Ressources supplémentaires
Documentation officielle de Redux
Redux Toolkit
React-Redux hooks
Cours et tutoriels en ligne sur Redux et React Native.
Conclusion
Redux est un outil puissant pour gérer l'état de votre application React Native. Bien qu'il ait une courbe d'apprentissage initiale, il offre une prévisibilité et une maintenabilité qui peuvent s'avérer inestimables à mesure que votre application grandit. Commencez petit, familiarisez-vous avec les concepts et évoluez à partir de là. Bon développement!
