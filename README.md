### ENV
```
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
PORT=3000
```
### Comandos utiles
```
yarn sequelize model:create --name <nombre> --attributes <atr1>:<tipo de atr1>,<atr2>:<tipo de atr2>,...
yarn sequelize db:migrate 
yarn sequelize seed:generate --name <nombre>
yarn sequelize db:seed:all
sequelize migration:generate --name custom_name_describing_your_migration
```

### Install Postgresql
Update packages
```
sudo apt update && sudo apt upgrade -y
```
install PostgreSQL
```
sudo apt install postgresql postgresql-contrib -y
sudo cat /etc/passwd | grep -i postgres

```
then congifure user
```
ubuntu@ip-172-31-20-1:~$ sudo -i -u postgres
postgres@ip-172-31-20-1:~$ createuser --interactive
Enter name of role to add: ubuntu
Shall the new role be a superuser? (y/n) y
ubuntu@ip-172-31-20-1:~$ psql -d postgres
postgres=# ALTER USER ubuntu PASSWORD 'password';
```
