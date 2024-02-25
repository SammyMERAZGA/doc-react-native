# Guide des mutations (actions et reducers) avec Redux pour React Native

## Introduction aux mutations dans Redux

Redux gère l'état de votre application à travers des concepts appelés actions et reducers. Imaginons cela comme un système où vous demandez un changement (action) et une machine (reducer) répond pour mettre à jour un tableau d'affichage (l'état) en conséquence.

## Création d'actions

Une action est juste un signal envoyé à Redux, souvent accompagné d'informations (payload). Par exemple, pour ajouter une tâche :

```javascript
{
  type: 'ADD_TODO',
  payload: 'Faire les courses'
}
```

Pour simplifier la création de ces signaux, on utilise des fonctions :

```javascript
function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: text,
  };
}
```

## Les Reducers

Les reducers sont des gestionnaires qui écoutent ces signaux (actions) et savent comment transformer l'état actuel en un nouvel état. Pour une liste de tâches :

```javascript
const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
}
```

## Dispatching Actions

Pour initier une mutation, on "dispatch" (envoie) une action. Dans React Native, cela se fait avec le hook `useDispatch` :

```javascript
import { useDispatch } from "react-redux";

function TodoAdder() {
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  // UI pour ajouter une tâche
}
```

## Points clés sur les mutations

- **Immutabilité** : On ne change jamais l'état directement; on utilise des actions et reducers pour obtenir un nouvel état.
- **Actions atomiques** : Chaque action représente une mutation spécifique pour garder les choses simples et prévisibles.
- **Reducers purs** : Ces fonctions ne modifient pas l'état directement mais produisent un nouvel état basé sur l'action reçue.

## Conclusion

En comprenant et en utilisant correctement les actions et les reducers, vous pouvez contrôler et gérer l'état de votre application React Native de manière efficace et prévisible.
