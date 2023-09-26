### Node-Express-Sass-Pug Entwicklungsumgebung

### `node` `express` `sass` `pug` `concurrently` `nodemon` `livereload` `prettier`

> node v18.17.1

## Installation

> CMD: Projektordner erstellen und hinein wechseln

    mkdir Name; cd Name

> **Schnellstart**

> CMD: git clone & git remote remove orgin & npm install & npm run dev

    git clone https://github.com/tBrause/npm-express-pug-examples .; git remote remove origin; npm install; npm run dev

> \_Erfolgreich getestet: 15.09.2023

## CMD-Befehle

> CMD: git clone & remote remove origin

    git clone https://github.com/tBrause/npm-express-pug-examples .; git remote remove origin;

> CMD: npm install

    npm install

> CMD: npm run start

    npm run start

> CMD: npm run dev

    npm run dev

## Struktur und Dateien

- bin
  - www
- public
  - images
    - pug.svg
  - stylesheets
    - style.css
    - style.css.map
  - favicon.svg
- routes
  - array.js
  - conditionals.js
  - css.js
  - forms.js
  - index.js
  - mixins.js
  - objects.js
  - tags.js
  - variables.js
- src
  - scss
    - globals
      - \_index.scss
      - \_reset.scss
      - \_variables.scss
    - main.scss
- views
  - includes
    - navigation.pug
  - arrays.pug
  - conditionals.pug
  - css.pug
  - error.pug
  - forms.pug
  - index.pug
  - layout.pug
  - mixins.pug
  - objects.pug
  - tags.pug
  - variables.pug
- .gitignore
- app.js
- package-lock.json
- package.json
- prettier.config.cjs
- README.md

## Konfiguration

### scripts

- dev: concurrently, nodemon, sass
- start: node

### dependencies

- cookie-parser
- debug
- express
- http-errors
- morgan
- pug

### devDependencies

- concurrently
- nodemon
- sass
- livereload
- connect-livereload

## Erweiterungen für Visual Studio Code

- Prettier
- ESLint

## Clone from

> [Node-Express-Sass-Starter Entwicklungsumgebung](https://github.com/tBrause/npm-express-sass-livereload)
