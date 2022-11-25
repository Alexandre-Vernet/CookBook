# CookBook - Groupe 5

Création d'une plateforme de recettes de cuisine.

## Technologies

- Front : Pug - CSS
- Back : Node - Express (TS)
- BDD : MongoDB
- Github

### Lancement du projet

Copier le fichier d'environnement
```
cp .env.example .env
```
- Compléter le champ MONGO_DB_URI du fichier .env avec l'URL de connexion à la base de données (obtenu via mongodb)
- Compléter le champ PORT

Installer les dépendances avec la commande suivante
````
npm install
````

Démarrer le projet en mode développement
````
npm run dev
````


### Docker

Créer l'image docker à partir du Dockerfile
````
docker build -t cook-book .
````

Lancer le container
````
docker run -p 3000:3000 --name "cook-book" cook-book
````

## Objectifs pour aujourd’hui (25/11) :
- [ ] Authentification Basic
- [x] Authentification SSO (OAuth 2.0) (https://cookbook-ynov.tk/)
- [ ] Diagramme UML

## Objectifs pour le (24/11) :
- [x] Corriger les remarques des autres étudiants sur notre code
  - [x] Supprimer les console.log
  - [x] Mettre à jour le READ.ME
  - [x] Créer un dockerignore
  - [x] Ajouter le "EXPOSE" dans le Dockerfile
  - [x] Copier le package-lock.json et le package.json AVANT de tout copier dans le Dockerfile
  - [ ] Renommer le commit non-approprié
- [x] Terminer le Dockerfile
- [x] Créer le conteneur pour le SSO 
## Fonctionnalités :
- CRUD utilisateurs
- CRUD recettes
- CRUD liste de recettes
- Affichage recettes
- Barre de recherche
- Filtres par : catégories de recettes / ingrédients / catégories d’ingrédients / likes
- Pagination
- Liste des commentaires
- Afficher le profil d’un utilisateur
- Ses listes
- Ses recettes
- Ses likes
- Ses follows
- Liker et Commenter des recettes

## Relation BDD

User :
- id : string
- lastName : string
- firstName : string
- mai : string
- password:string
- recipes : string[]

Recipe :
- id : string
- created_at : datetime
- modified_at : datetime
- name : string
- categories : string[]
- preparation_time : number
- difficulty : number
- authorId : string
- description : string
- likes : string[]
- ingredients : string[] (array d’id)
- comments: string[]


Like :
- id : string
- recipeId : string
- userId : string

Ingredient :
- id : string
- name : string
- ingredient_type : string

Category :
- id : string
- name : string

## Documentation


### Mise en place du SSO via oauth2-proxy

- Création d’un nom de domaine via Freenom
- Changement de Nameserver Freenom -> Cloudflare
- Ajout de la redirection dans le Proxy Manager et ajout du SSL (51.159.195.95:4180 -> https://cookbook-ynov.tk)
- Création des identifiant OAuth 2.0 chez Google et ajout de l’url autorisée et de l’url de callback
- Déploiement du conteneur oauth2 et configuration des variables d’environnement 

<img width="994" alt="Capture d’écran 2022-11-25 à 14 59 21" src="https://user-images.githubusercontent.com/15053364/204001683-9df163ea-0221-457d-aacb-a30da3e64543.png">

Connexion et déconnexion en ligne sur https://cookbook-ynov.tk


### Architecture

Suivre le lien pour visualiser la documentation Architecture

````
https://app.diagrams.net/#G1LRVR_1aQ0z_qsPEz4WjehcDGyiFwqGDn
````


## API

### GET '/form'
Renvoie la vue du formulaire


### POST '/form' 
- name: string
- categories: string[]
- difficulty: number
- description: string
- ingredients: string
- Et retourne la vue du formulaire

### Port du serveur
Ecoute du serveur sur le port 3000
