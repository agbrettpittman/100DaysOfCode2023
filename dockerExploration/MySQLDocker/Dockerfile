#Create MySQL Image for JSP Tutorial Application
FROM mysql

ENV MYSQL_ROOT_PASSWORD testpass
ADD initialSQL.sql /docker-entrypoint-initdb.d

EXPOSE 3306