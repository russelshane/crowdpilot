mysql:
	docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -d mysql:latest

.PHONY: mysql