# resapi-example-node-mysql
```
$ docker pull mysql:5.7

$ docker run -d -p 3306:3306 --name mysql57 -e MYSQL_ROOT_PASSWORD=x1234567890 mysql:5.7

$ docker pull phpmyadmin/phpmyadmin:latest

$ docker run --name my-own-phpmyadmin -d --link my-own-mysql:db -p 8081:80 phpmyadmin/phpmyadmin
```
