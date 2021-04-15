Mapstore dev pour CNR
==========

Quick Start
------------

Clone the repository with the --recursive option to automatically clone submodules:

`git clone --recursive https://gitlab.com/dev-cnr/mapstore-de-dev.git`

Install NodeJS >= 7.10.0 , if needed, from [here](https://nodejs.org/en/download/releases/).

Start the development application locally:

`npm install`

`npm start`

The application runs at `http://localhost:8081` afterwards.
Attention le port sur les poste CNR ayant Docker est le 8082

Read more on the [wiki](https://gitlab.com/dev-cnr/mapstore-de-dev.git/wiki).


Nous avons dû copier la dépendence babel-plugin-transform-imports dans le package.json du projet pour corriger les erreurs du npm start
