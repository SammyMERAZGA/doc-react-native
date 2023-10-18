# Guide des mutations (actions et reducers) avec Redux pour React Native
## Introduction aux mutations dans Redux
Dans Redux, l'état de votre application ne change jamais directement. À la place, chaque changement est décrit par une "action", qui est simplement un objet avec un type. Les "reducers" prennent ensuite ces actions et génèrent un nouvel état basé sur l'action reçue.

## Création d'actions
Une action est un objet JavaScript qui a généralement une propriété type et peut également contenir des "payloads", "meta" et d'autres propriétés.

Structure d'une action typique :
```javascript
{
  type: 'ADD_TODO',
  payload: {
    text: 'Faire les courses'
  }
}
```

Pour standardiser la création d'actions, il est courant d'utiliser des "action creators", qui sont des fonctions qui retournent des actions :

```javascript
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text
    }
  };
}
```

## Les Reducers
Un reducer est une fonction pure qui prend en arguments l'état précédent et une action, puis retourne le nouvel état.

Prenons un exemple basique avec une liste de tâches :

```javascript
const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.text]
      };
    default:
      return state;
  }
}
```

Ici, quand l'action ADD_TODO est dispatchée, le reducer ajoute un nouvel élément à la liste todos dans l'état.

## Dispatching Actions
Pour effectuer une mutation (changer l'état), vous "dispatchez" (envoyez) une action. Dans le contexte de React Native avec react-redux, vous utilisez le hook useDispatch :

```javascript
import { useDispatch } from 'react-redux';

function TodoAdder() {
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  return (
    // Votre UI ici
  );
}
```

## Points clés sur les mutations :
### Immutabilité : 
L'état en Redux est immuable. Cela signifie que vous ne modifiez jamais l'état directement. Au lieu de cela, vous retournez toujours un nouvel état à partir de vos reducers.

### Actions atomiques :
Il est préférable de garder vos actions petites et spécifiques à une seule modification. Cela rend votre application plus prévisible et plus facile à déboguer.

### Reducers purs :
Les reducers doivent être des fonctions pures. Cela signifie qu'ils ne doivent pas avoir d'effets secondaires et doivent retourner la même sortie pour les mêmes entrées.

## Conclusion
Les actions et les reducers sont au cœur de la logique de mutation dans Redux. Ils offrent une manière structurée et prévisible de gérer les changements d'état de votre application. En suivant les principes clés de l'immutabilité, de la pureté et de l'atomicité, vous vous assurez que votre application est robuste, maintenable et facile à déboguer.