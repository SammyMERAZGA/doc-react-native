# Guide des getters (sélecteurs) avec Redux pour React Native
## Introduction aux getters (sélecteurs) dans Redux
Dans le contexte de Redux, un "sélecteur" (ou getter) est une fonction qui prend tout l'état de l'application comme argument et renvoie une partie de cet état. Les sélecteurs peuvent aider à encapsuler la structure de l'état de l'application, offrant une flexibilité si vous décidez de refactoriser ou de changer cette structure ultérieurement.

## Création de sélecteurs simples
Un sélecteur est généralement une fonction pure qui reçoit l'état global et renvoie une partie spécifique de cet état.

Par exemple, si vous avez un état comme ceci:

```javascript
const initialState = {
  user: {
    name: 'John',
    age: 30
  },
  posts: ['Post 1', 'Post 2']
};
```

Vous pouvez avoir un sélecteur pour obtenir le nom de l'utilisateur :

```javascript
export const selectUserName = (state) => state.user.name;
```

Et un autre pour obtenir tous les posts :

```javascript
export const selectAllPosts = (state) => state.posts;
```

## Utilisation des sélecteurs dans les composants React Native
Avec react-redux, vous pouvez utiliser le hook useSelector pour accéder aux valeurs retournées par vos sélecteurs :

```javascript
import { useSelector } from 'react-redux';
import { selectUserName, selectAllPosts } from './selectors';

function UserProfile() {
  const userName = useSelector(selectUserName);
  const posts = useSelector(selectAllPosts);

  return (
    <View>
      <Text>Bonjour, {userName}!</Text>
      <Text>Vos posts :</Text>
      {posts.map((post, index) => (
        <Text key={index}>{post}</Text>
      ))}
    </View>
  );
}
```

## Avantages des sélecteurs
### Encapsulation:
Les sélecteurs masquent la structure de votre état. Si vous modifiez la façon dont vous stockez un certain morceau de données, vous n'avez à modifier que le sélecteur correspondant, pas chaque composant qui utilise cette donnée.

### Réutilisabilité:
Vous pouvez réutiliser un sélecteur dans plusieurs composants, garantissant que la logique pour extraire une partie spécifique de l'état est définie à un seul endroit.

### Optimisation:
En utilisant des bibliothèques comme reselect, vous pouvez créer des sélecteurs "mémorisés" qui n'évaluent que lorsque la partie de l'état qu'ils concernent change, optimisant ainsi les performances.

## Conclusion
Les getters ou sélecteurs jouent un rôle essentiel dans les applications Redux, offrant une manière structurée et optimisée d'accéder à l'état de votre application. En encapsulant l'accès à l'état et en fournissant des optimisations, ils permettent de maintenir des applications performantes et maintenables à mesure qu'elles grandissent.