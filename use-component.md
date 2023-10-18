# Réutilisation d'un composant

Ici nous allons voir comment réutiliser un composant à plusieurs endroits différents au sein d'un projet.

##

**Pourquoi ?**

La réutilisation d'un composant en React Native est un élément essentiel car cela favorise la maintenance et la cohérence du code améliorant ainsi la productivité et la qualité de l'application.

**Exemple**

Pour pouvoir réutiliser le composant, comme on a pu le voir, on doit importer le composant qu'on a crée dans la page que l'on souhaite. 

```
import MonComposant from './components/MonComposant';
```

Ensuite, si je souhaite afficher mon composant je le retourne dans ma fonction Javascript de la manière suivante : 
```
<MonComposant />
```
Il s'agit ici du composant qu'on a vu lors de la création d'un composant à la page précédente. De cette manière, le composant affichera le texte "Mon Composant".

## Les Props

Les props en React Native sont des données que l'on peut passer d'un composant à un autre composant pour personnaliser ou configurer le comportement de ce dernier.

Imaginons que je veuille faire passer un message, je définis mon composant parent de la manière suivante : 
```
const ComposantParent = ({message}) => {
  
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}
```
Ici, ma fonction va prendre en paramètre un prop "message" qu'elle va afficher dans une vue "View" en utilisant un élément de texte "Text". De cette manière, le composant est prêt à recevoir la valeur de "message" depuis n'importe quel autre composant.

##
Ensuite, pour pouvoir afficher le message que l'on souhaite dans App.js par exemple, on déclare le message de la manière suivante (ne pas oublier d'importer le composant contenant la prop "message"). On pourra afficher n'importe quel message en modifiant le texte directement ici :
```
const message = "Salut c'est le composant parent";
```

##
Pour finir, on appelle le composant parent de la manière suivante afin d'afficher les données à l'interface utilisateur : 
```
<ComposantParent message={message} />
```
## Conclusion

En définitive, passer des props d'un composant à un autre est une pratique clé dans le développement React Native, car elle favorise la modularité, la réutilisation de code et permet de créer des interfaces utilisateur dynamiques et configurables.

