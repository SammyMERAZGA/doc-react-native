# Lancer le projet

Cette page vous explique comment lancer le projet sur votre ordinateur.

## Introduction

Après avoir cloné le projet sur votre ordinateur, il faut installer toutes les bibliothèques et librairies que le projet utilise ; on appelle ça les dépendances.

**Petite explication**

Lorsque l'on tape sur le terminal la commande (ci-dessous) pour installer les dépendances, la commande va chercher le fichier "package.json" et notamment la partie "dependencies" afin d'installer les différentes librairies en respectant la version qui est spécifiée dans ce même fichier.

## Installation des dépendances

Par défaut, nous recommandons d'utiliser Npx. Le choix final vous revient tout de même, les différences seront très minimes.

### Npx

```
npx expo start
```

### Yarn

```
yarn expo start
```
