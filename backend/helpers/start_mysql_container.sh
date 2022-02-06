PASSWORD=1234

echo "Starting mysql container with password: $PASSWORD..."
sudo docker run --rm -d -p 3306:3306 --name mysql_container -e MYSQL_ROOT_PASSWORD=$PASSWORD mysql
echo "All done!"
