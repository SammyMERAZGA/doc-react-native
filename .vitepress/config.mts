import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "J-Corp",
  description: "React Native Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Installation", link: "/setup-workspace" },
      { text: "Hooks", link: "/all-hooks" },
      { text: "Appels APIs", link: "/client-http" },
    ],

    sidebar: [
      {
        text: "Installation du projet",
        items: [
          {
            text: "Préparation de l'environnement de travail",
            link: "/setup-workspace",
          },
          { text: "Cloner le projet", link: "/clone-project" },
          { text: "Lancer le projet", link: "/start-project" },
          { text: "Installer Insomnia", link: "/installation-insomnia" }
        ],
      },
      {
        text: "Sécurité",
        items: [
          {
            text: "Fondamentaux de la sécurité",
            link: "/security-fundamentals",
          },
        ],
      },
      {
        text: "Router & navigation",
        items: [
          {
            text: "Installer le router",
            link: "/router",
          },
          { text: "Configurer les routes", link: "/configure-routes" },
        ],
      },
      {
        text: "Page React Native",
        items: [
          {
            text: "Explication d'une page React",
            link: "/page-explanation",
          },
        ],
      },
      {
        text: "Création d'un composant",
        items: [
          {
            text: "Setup du composant",
            link: "/setup-component",
          },
          { text: "Réutiliser le composant", link: "/use-component" },
        ],
      },
      {
        text: "Gestion des états",
        items: [
          {
            text: "Introduction",
            link: "/intro-hooks",
          },
          { text: "Les States", link: "/all-states" },
          { text: "Explications des hooks", link: "/all-hooks" },
        ],
      },
      {
        text: "Store Redux",
        items: [
          {
            text: "Introduction",
            link: "/intro-redux",
          },
          { text: "Installation & setup", link: "/setup-redux" },
          { text: "Getters", link: "/getters" },
          { text: "Mutations", link: "/mutations" },
        ],
      },
      {
        text: "Appels APIs",
        items: [
          {
            text: "Installation du client HTTP",
            link: "/client-http",
          },
          { text: "Route GET", link: "/get" },
          { text: "Route POST", link: "/post" },
          { text: "Route PATCH/PUT", link: "/patch-put" },
          { text: "Route DELETE", link: "/delete" },
        ],
      },
      {
        text: "CSS",
        items: [
          {
            text: "Les bases du CSS",
            link: "/how-to-use-css"
          },
          {
            text: "Design responsive",
            link: "/responsive"
          },
          {
            text: "Ajouter une icône",
            link: "/ajouter-icone",
          },
          {
            text: "Couleurs de l'application",
            link: "/couleurs-app"
          }
        ],
      },
      {
        text: "Tests",
        items: [
          {
            text: "Introduction",
            link: "/introduction-tests",
          },
        ],
      },
      {
        text: "Résolution de bugs",
        items: [
          {
            text: "Comment résoudre un bug",
            link: "/bug-resolution",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
