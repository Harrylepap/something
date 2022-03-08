# Déploiement d'un site HTML5 sur heroku

# Prérequis

## 1-Créer un compte HEROKU 
    
    - Allez sur le site [heroku] (https://signup.heroku.com/login)
    - Entrez des données valides puis passez le test captcha
    - Vérifiez votre mail

## 2-Se connecter à son compte Heroku

# Etapes pour le déploiement sur à l'aide de github

![image](https://user-images.githubusercontent.com/98638690/157096182-7f0e8b47-c67c-438d-9923-324a853dd7fd.png)

## Création de l'application
    Sur le site de [Heroku] (https://dashboard.heroku.com/)
        - Cliquer new app sur le coin droit
        - Nommez votre application
        - Choisissez une région (si vous choisissez l'Europe,l'application s'ouvrira plus vite en Europe)
        - Cliquer create app

## Déploiement 

### Configuration :
    Pour uploader notre site HTML5, CSS ,JS nous allons devoir faire une feinte à Heroku.
    Sur le premier plan du repository : (pas dans un dossier)
        - Créer un fichier index.php 
        - Ecrire directement votre html sur ce php // ou alors écrivez : <?php include_once("'votre_page_index'.html"); ?>
        - Créer un fichier composer.json
        - Mettre {} dans ce fichier

![image](https://user-images.githubusercontent.com/98638690/157174276-4e41c59a-e85e-494f-ae0b-6568ba0efe78.png)
    
    Maintenant il faut déclarer à Heroku que notre site web est une application php :
        - Aller sur le site web de heroku puis sur votre application
        - Aller dans settings (voir image)
        - Descendez jusqu'à voir "Add buildpacks"
        - Cliquer sur le bouton et choisissez php

### Liaison avec github 
        - Sur le même site, aller dans la section deploy
        - Choisissez github comme méthode de déploiement
        - Utilisez votre compte github et écrivez le nom du repository sur lequel vous avez mis les fichiers php et json
        - Cliquez sur connect
        - Descendez jusqu'à trouver un bouton 'Deploy branch'
        - Choisissez la branche où il y a les fichiers index.php et composer.json
        - Cliquer sur 'Deploy Branch' pour déployer votre application

 ### Afin de ne pas avoir à faire de deploy après changement(s), veuillez cliquer 'enable automatic deploys'

# Pour le déploiement en utilisant Heroku CLI :
    - Installer Heroku CLI grâce à ce [tuto] (https://devcenter.heroku.com/articles/heroku-cli)
    - ensuite cliquer sur l'option "Heroku Git " ou "Container Registry" de la section Deploy


# Cliquer sur View pour voir votre application. Félicitations !
