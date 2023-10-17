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
Store: Le "magasin" global qui contient l'état de votre application.

Actions: Des objets qui décrivent ce qui s'est passé (par exemple, `{ type: 'ADD_TODO', text: 'Learn Redux' }`).

Reducers: Des fonctions qui déterminent comment l'état change en fonction des actions.

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

Créer un store
Utilisez createStore pour créer un store à partir de votre réducteur.
```javascript
import { createStore } from 'redux';
import todos from './reducers/todos';

const store = createStore(todos);
```

Fournir le store à votre application
Utilisez le Provider de react-redux pour rendre le store disponible pour tous les composants de votre application.
```javascript
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import todos from './reducers/todos';

const store = createStore(todos);

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

Connecter des composants à Redux
Utilisez connect pour accéder à l'état et aux actions dans vos composants.
```javascript
import React from 'react';
import { connect } from 'react-redux';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  );
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
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
