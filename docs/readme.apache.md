ROLES DES VIRTUALHOSTS 
Les VirtualHosts (VH) permet à une seule et unique IP de fournir plusieurs sites.
 Ces différents sites peuvent être servit sur des ports différents : 80 (HTTP), 443 (HTTPS) ou encore sur des noms de domaines différents.
 Sous Debian, les fichiers de VirtualHosts sont à créer dans le répertoire "/etc/apache2/sites-available/" sous un nom du style "monsite.conf." (le ".conf" mettre le fichier en un fichier de config).
c'est à dire  "/etc/apache2/sites-available/monsite.conf"

Si une requête arrivant sur n’importe quel IP et sur le port 80 
<VirtualHost *:80>  
Avec un valeur de Host: monsite.fr ou monsite.com
        ServerName monsite.fr
        ServerAlias monsite.com
 Il lui faut servir les fichiers se trouvant dans /var/www/monsite
        ServerAdmin webmaster@monsite.fr
        DocumentRoot /var/www/monsite
  Ensuite il enregistrera les logs dans des fichiers spécifiques au site et non dans les fichiers de log apache standard 
        LogLevel info
        ErrorLog ${APACHE_LOG_DIR}/monsite_error.log
        CustomLog ${APACHE_LOG_DIR}/monsite_access.log combined

/etc/apache2/sites-available/monsite.conf
<VirtualHost *:80>  
        ServerName monsite.fr
        ServerAlias monsite.com
        ServerAdmin webmaster@monsite.fr
        DocumentRoot /var/www/monsite
        LogLevel info
        ErrorLog ${APACHE_LOG_DIR}/monsite_error.log
        CustomLog ${APACHE_LOG_DIR}/monsite_access.log combined
</VirtualHost>  

ACTIVER APRES LA CONFIGURATION EN VIRTUALHOSTS
# a2ensite monsite.conf
Enabling site parks.
To activate the new configuration, you need to run:
  service apache2 reload
# service apache2 relo

On peut en créer autant que la capacité du serveur atteindra ses limites.
