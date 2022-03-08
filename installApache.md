## _Comment installer Apache sur Debian _

## Étape 1 - Installer Apache sur Debian 
Installez Apache2 avec :

```sh
$  sudo apt update
```
```sh
$ sudo apt install apache2
```

## Étape 2 - Gérer le service Apache

Pour vérifier l'état du service Apache.

```sh
$ sudo systemctl status apache2.service
```

Les commandes pour arrêter, démarrer ou redémarrer le service Apache.

```sh
$ sudo systemctl stop apache2
```
```sh
$ sudo systemctl start apache2
```
```sh
$ sudo systemctl restart apache2
```
## Étape 3 Tester la configuration d'Apache

Pour voir la version d'Apache. 

```sh
$ su -
```
```sh
~# apache2 -v
```
Pour acceder aux serveur Apache on utilise l'adresse IP du serveur .
Vous verrez une page Apache par défaut sur le navigateur Web. 
Cela signifie que le serveur Web Apache a été installé avec succès sur votre système.

