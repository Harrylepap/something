# Plusieurs sites sur un seul serveur Apache

## Se connecter en tant que root pour faciliter les manipulations
	''' su

## Installer le serveur web Apache2
	''' apt install apache2

## Aller dans le répertoire d'apache pour créer les fichiers de configuration des sites à heberger
	''' cd /etc/apache2/sites-availables/
	''' touch site1.local.conf

## Copier le contenu du fichier 000-default.conf dans les nouveaux fichiers créés
	''' cp 000-default.conf site1.local.conf

## Modifier le fichier site1.local.conf
	''' nano site1.local.conf
	''' DocumentRoot /var/www/www
	''' ServerName username1.site.local

## Créer un lien symbolique mènant vers /home/www dans /var/www
	''' ln -s /home/www /var/www

## Désactiver l'accès  d'apache au fichier 000-defaut.conf
	''' a2dissite 000-default.conf

## Activer l'accès vers site1.local.conf
	''' a2ensite site1.local.conf

## Appliquer les modifications apportées à apache
	''' systemctl reload apache2

## Specifier l'ip et le nom de domaine de votre site
	''' nano /etc/hosts
	''' 127.0.O.1 username1.site.local

