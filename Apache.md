## _Comment installer et configurer Apache sur Arch Linux_

## Étape 1 - Installer Apache sur Arch Linux

Installez les packages de Apache2 à l'aide de la commande suivante. 

```sh
# pacman -S apache
```

## Étape 2 - Gérer le service Apache

Voici les commandes pour arrêter et redémarrer Apache.

```sh
# systemctl stop httpd
```
```sh
# systemctl restart httpd
```

Pour voir la version de Apache.

```sh
$ apachectl -v
```

Accédez maintenant à votre serveur Apache en utilisant l'adresse IP du serveur .




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
$ sudo systemctl status apache2
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




## _Comment installer et configurer Apache sur redHat_

## Étape 1 - Installer Apache sur redHat

Installez Apache2 à l'aide de la commande suivante. 

```sh
$ sudo dnf install httpd
```


## Étape 2 - Gérer le service Apache

Le service Apache est géré avec la ligne de commande systemctl sur redHat. 
Utilisez la commande suivante pour activer le service Apache, puis démarrez-le.

```sh
$ sudo systemctl enable httpd.service
```

```sh
$ sudo systemctl start httpd.service
```

Voici les autres commandes pour arrêter et redémarrer Apache.

```sh
$ sudo systemctl stop apache2
```
```sh
$ sudo systemctl restart apache2
```

Pour voir la version de Apache.

```sh
$ httpd -v
```

Accédez maintenant à votre serveur Apache en utilisant l'adresse IP du serveur .

