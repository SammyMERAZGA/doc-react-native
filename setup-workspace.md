# Préparation de l'environnement de travail

Cette page vous explique les logiciels, dépendances et outils qu'il faut avoir avant de développer sur le projet.

## Git

Pour faire simple, Git est ce qui va nous permettre de travailler à plusieurs sur un même projet.

### Installation de Git

Rendez-vous sur le site officiel de Git et suivez les instructions.

Le site : https://git-scm.com/

## NodeJS (via NVM)

NVM (Node Version Manager) est un outil qui va permettre de changer de versions de Node de façon simple et rapide.

**C'est quoi NodeJS ?**

Pour faire simple et rapide, NodeJS est un moteur qui permet d'exécuter le langage JavaScript côté serveur. Ici, il nous sera utile uniquement pour lancer notre serveur et gérer les dépendances

## Installation de NVM

### Mac/Linux

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

**Exécution de NVM (à faire une fois après la commande du desuss)**

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

**Une fois NVM installé, vous pouvez changer de version de Node rapidement !**

::: tip
Une fois NVM installé, vous pouvez changer de version de Node rapidement.
:::

**Installation de Node**

Ici, on spécifie la version 16.18.0 car c'est celle que l'on veut utiliser mais on aurait très bien pu mettre une autre version.

```
nvm install 16.18.0
```

**Utiliser une version de Node**

```
nvm use 16.18.0
```

### Windows

Aller sur le lien Github suivant et cliquez sur "Download Now!" dans la documentation en bas du code source.

Le lien : https://github.com/coreybutler/nvm-windows

Ensuite, télécharger le ficher .exe (présent sur l'image ci-dessous) et suivez les instructions de l'exécutable afin d'avoir NVM.

!["./assets/logo.png"](assets/windows-nvm.png)
