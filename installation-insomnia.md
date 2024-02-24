# Installation Insomnia

Suivez ces étapes pour configurer Insomnia, un outil qui permet de tester les API. Il est important de mettre à jour le projet chaque matin ou soir après avoir exécuté `git pull` sur la branche `develop` du backend pour avoir le projet à jour puis de réaliser les étapes 5 à 8 pour que la collection le soit aussi.

## Étape 1
Créez un compte sur Insomnia, téléchargez et lancez l'exécutable Insomnia.

## Étape 2
Clonez le backend et placez-vous sur la branche `develop`. Exécutez `git pull` pour vous assurer d'avoir la version la plus récente du projet. Faites cette manipulation régulièrement, idéalement chaque matin ou soir, pour garder votre environnement de développement à jour.

## Étape 3
Ajoutez le plugin `Repo Sync plugin v3` et obtenez un token d'accès via `Application` > `Preferences` > `Plugins` > `Browse Plugin Hub` > utiliser la barre de recherche > `Install plugin`.

## Étape 4
Créez une collection nommée `In-spire`. **Attention**, assurez-vous de bien écrire le nom de la collection.

## Étape 5
Allez dans la collection, cliquez sur la flèche vers le bas à droite du nom de la collection > `Repo Sync - Configure`. Sélectionnez le chemin du dossier du repo `in-spire-back` cloné lors de l'étape 2.

## Étape 6
Cliquez à nouveau sur la flèche vers le bas à droite du nom de la collection > `Repo Sync - Import Workspace`.

## Étape 7
Revenez à l'accueil en cliquant sur l'icône de maison et supprimez la collection la plus à droite.

## Étape 8
Entrez dans la collection restante, utilisez le switch pour passer du mode `local` au mode `online`.

## Étape 9
Lancez la requête `API Login`.

## Étape 10
Testez en lançant la requête `Get User`.

En suivant ces étapes, vous aurez configuré Insomnia pour tester l'API du projet `In-spire`. Assurez-vous de mettre à jour le backend et la collection régulièrement pour travailler avec les données les plus actuelles.