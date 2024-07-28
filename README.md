# Lancement de l'environnement local

### 1. Base de données
```sh
docker-compose up alten-shop-db -d
```

### 2. Front-end
```sh
cd ./front
npm i
npm run start
```

### 3. Back-end
```sh
cd ./back
cp .env.example .env
npm i
npm run dev
```

## Docker
La configuration Docker est pratiquement terminée, je n'ai pas eu le temps de le finir intégralement.
Vous trouverez un docker-compose avec 3 conteneurs (front api bdd). J'ai laissé les valeurs dans les environnements pour faciliter le lancement du conteneur. Les images ont également été publiée sur mon DockerHub, il n'y a pas besoin de les build.
Il reste 1 ou 2 problème pour terminer cette partie : 
- La commande `npm run start` ne fonctionne pas correctement et empêche le conteneur de fonctionner
- Le conteneur front n'arrive pas à communiquer avec le conteneur api (même si le front arrive à faire un CURL sur le back)
- Il reste également à gérer les URL (par exemple dans front/src/app/product.product.service.ts, il faut mettre à jour l'URL avec le nom du conteneur back comme hôte, pour ça, j'aurai créé le fichier environment.prod et environment afin de dinstiguer les 2 URL comme [ici](https://github.com/Alexandre-Vernet/SuperStore/tree/main/apps/superstore/src/environments)
- Enfin, gérer des secrets (sur GitHub par exemple), pour ne pas laisser les variables d'environnement en dur dans le docker-compose et évidemment, vider le fichier .env.example

## Base de données
La base de données est une base MySQL qui s'éxecute sur un conteneur Docker. A son lancement, un fichier SQL est chargé afin d'alimenter la base de données.

## Environnement
J'ai volontairement laissé les valeurs dans le .env.example pour vous permettre le lancement rapide de l'application. Il en est de même pour le script de bdd.

# Features
Le projet est intégralement terminé
- CRUD product (avec gestion des erreurs (middleware checkProduct) et mise à jour en temps réel sur le front
- Filtre / tri / recherche / pagination des produits
- Docker (pratiquement terminé)


------------------------------------------------

Créer un module angular "product" avec 2 composants (basés sur primeng): 
 - **products-admin** : qui liste les produits et qui permet de les administrer (ajouter, supprimer, modifier).
    Il doit être accessible à cette adresse : http://localhost:4200/admin/products
 - **products** : qui liste les produits en mode lecture seule, comme sur une boutique en ligne.
    Il doit être accessible à cette adresse : http://localhost:4200/products

Une liste de produit est disponible dans le dossier assets : `front/assets/products.json`.

Le service qui permettra de manipuler les produits doit se baser sur cette liste et être prêt à être connecté sur une API Rest ultérieurement

Le design cible est visible sur les captures d'écrans ci-dessous (et disponibles dans le dossier `front/doc`).

**Pour la partie Admin :**
![admin](front/doc/products-admin.png)

Nous vous conseillons d'utiliser le composant table de [PrimeNG](https://primeng.org/table/filter) avec les options filtre, edit, page, etc...

 **Pour la partie publique :**
![public](front/doc/products.png)

Nous vous conseillons d'utiliser le composant data view de [PrimeNG](https://primeng.org/dataview) avec les options sort, search, page, etc...


Le menu latéral gauche doit contenir les accès à ces 2 composants.

Un système de pagination doit être mis en place pour pouvoir afficher les produits par 10, 25 ou 50 comme ci-dessous :

![pagination](front/doc/pagination.png)

# Back-end (optionnel)

Si vous avez le temps vous pouvez développer un back-end permettant la gestion de produits définis plus bas.
Vous pouvez utiliser la technologie de votre choix parmis la liste suivante :

- nodejs/express
- Java/Spring Boot
- C#/.net Core
- Python/Flask


Le back-end doit gérer les API suivantes : 

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new products | Retrieve all products          | X                                        | X   |     X            |
| **/products/1**    | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

Un produit a les caractéristiques suivantes : 

``` typescript
class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
}
```

Le back-end créé doit pouvoir gérer les produits dans une base de données SQL/NoSQL ou dans un fichier json.

## Bonus

Vous pouvez ajouter des tests Postman ou Swagger pour valider votre API
