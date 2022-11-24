# CookBook - Groupe 5

Création d'une plateforme de recettes de cuisine.

### Technologies

- Front : Pug - CSS
- Back : Node - Express (TS)
- BDD : MongoDB
- Github

### Clone project

Clonez le project en suivant les commandes suivantes:

```
git clone https://github.com/Alexandre-Vernet/CookBook.git
git checkout dev

```

2 branches principales vous seront présentés : "main" et "dev" 

## Démarrage

Installer le modules inclus dans le package.json et lancer le project en suivant les commandes : 

```
npm install 
npm run dev

```

### Fonctionnalités 


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


### Conception BDD 

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