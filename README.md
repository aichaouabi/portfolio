# Portfolio Aicha Ouabi Idar
React 19, Vite, TypeScript et Tailwind CSS 4.

## Démarrage
npm install
npm run dev

## Vérification
npm run check
npm run build
node verify.mjs (après playwright install chromium)

## Personnalisation
Textes et coordonnées : src/content.ts.
Photo : ajouter src/assets/profile.png. La photo est importée par Vite dans le Hero.
LinkedIn : renseigner profile.linkedin ; le lien est masqué tant que la valeur est vide.
WhatsApp : profile.whatsapp.
Couleurs, thèmes et mise en page : src/styles.css et DESIGN.md.
Le formulaire utilise mailto, sans envoi serveur ni collecte des données. Il nécessite une application de messagerie configurée.

## Contenu
Le PDF fourni est une référence éditoriale ; le titre Co-Founder of VA CONSULTING suit le brief utilisateur. Aucun client, résultat chiffré ou certification personnelle n’a été ajouté.

## Déploiement sur GitHub Pages

Les scripts `predeploy` et `deploy` compilent le portfolio puis publient `dist` sur la branche `gh-pages` avec le paquet `gh-pages`.

1. Créer un dépôt GitHub et y pousser le projet. Configurer son URL comme remote `origin` si ce n’est pas déjà fait : `git remote add origin https://github.com/VOTRE_COMPTE/VOTRE_DEPOT.git`.
2. Exécuter `npm run deploy` avec un accès Git en écriture au dépôt. La compilation se lance automatiquement avant publication.
3. Dans le dépôt GitHub, ouvrir **Settings → Pages**. Choisir **Deploy from a branch**, puis la branche **gh-pages** et le dossier **/ (root)**, et enregistrer.
4. Consulter l’URL indiquée dans cette page après la publication.

`base: "./"` dans `vite.config.ts` génère des liens d’assets relatifs, compatibles avec un site hébergé dans un sous-dossier de dépôt. Aucun nom de compte ou de dépôt n’est prédéfini.

Documentation : https://github.com/tschaub/gh-pages et https://vite.dev/guide/static-deploy.html.
