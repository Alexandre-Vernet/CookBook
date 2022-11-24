# CookBook - Groupe 5

Création d'une plateforme de recettes de cuisine.

### Technologies

- Front : Pug - CSS
- Back : Node - Express (TS)
- BDD : MongoDB
- Github

II. Lancement du projet

Copier le fichier d'environnement
```
cp .env.example .env
```
Compléter le champ MONGO_DB_URI du fichier .env avec l'URL de connexion à la base de données (obtenu via mongodb)

Installer les dépendances avec la commande suivante
````
npm install
````

Démarrer le projet en mode développement
````
npm run dev
````

III. Fonctionnalités :

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



V. Relation BDD

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
