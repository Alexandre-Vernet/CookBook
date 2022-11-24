# CookBook

I. Technos :

- Front : Pug - CSS
- Back : Node - Express (TS)
- BDD : MongoDB
- Github

II. Fonctionnalités :

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

III. Objectifs pour aujourd’hui :
1. Front
- CRUD recettes (affiche de 12 recettes)
2. Back
- Créer la base de données
- Connexion BDD
- CRUD recettes





IV. Relation BDD

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
