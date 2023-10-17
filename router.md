# Préparation du router dans votre application

Cette page vous explique comment intégrer un router dans votre projet

## A quoi sert un router ?

le router (ou routeur) est utilisé pour gérer la navigation entre différentes vues ou écrans au sein de votre application mobile. Il permet de définir comment les utilisateurs se déplacent d'une partie de l'application à une autre, que ce soit en cliquant sur des boutons, en appuyant sur des liens, ou en effectuant d'autres actions de navigation.

**Les avantages du routage ?**

- Gestion de la navigation : Le router permet de définir des règles de navigation, telles que l'association d'une URL ou d'une route à un écran spécifique de votre application. Cela permet aux utilisateurs de passer d'un écran à l'autre de manière fluide et structurée.

- Maintien de l'historique : Le router garde un historique des écrans visités, ce qui permet aux utilisateurs de revenir en arrière ou de naviguer entre les écrans précédents à l'aide des boutons "Retour" ou de gestes de balayage.

- Gestion des paramètres : Le router permet de transmettre des paramètres entre les écrans, ce qui est essentiel pour personnaliser le contenu ou le comportement des écrans en fonction des actions de l'utilisateur.

- Structuration de l'application : En utilisant un router, vous pouvez organiser votre application en plusieurs écrans ou vues distinctes, ce qui rend la gestion de la navigation plus claire et facilite la maintenance de votre code.

- Navigation entre onglets ou côte à côte : Le router peut également gérer la navigation entre des onglets ou des écrans côte à côte, ce qui est courant dans de nombreuses applications mobiles.

**Ils existent 4 grandes libraires pour gérer le routage**

react-native-router-flux
React Navigation
React Native Redux Router
React Router Native

**Installation de React Navigation**

```
npm install @react-navigation/native
```

**Une fois librarie installé, vous pouvez commencer a créer votre router dans votre composant de navigation**

Donc vous pouvez passer a la page ensuite configuration du router
