# 🚧 Description Project 🚧 

This project is made with Node js and Mongo Db initially for this project and documentation the project will be with a local database for it you must install mongodb community server from the official site: 

https://www.mongodb.com/try/download/community

you must download and install it sequentially through the installer setup then create the database connection and create the database with their respective collections from the MongoDB Compass application.

At the end this project was migrated to a database in the cloud in this case it is optional if you want to leave it local you can work it without any inconvenience.

# Important Extensions 💣
As a recommendation you can install an extension from the VS Code extensions to manage the `mongo db` database from your own workspace the extension can be obtained like this: 

* `MongoDB for VS Code`

# Important Commands 💻

### `command to run the server`

execute the "mongod" command from any cmd console:

* `mongod`

```bash
mongod
```

`Note:` In case you get an error or the console unexpectedly closes the server execution it is because you have not created the path where the execution files will be saved for it before you must create the path in your main drive C with this command:

* `mkdir C:\data\db`

```bash
mkdir C:\data\db
```
### `Command to know on which port you are listening`

Sometimes the localhots does not work correctly and it becomes necessary to know on which port or on which IP address the PC is running the API to give addresses or routes to the important parts in your application so from the cmd you can use this command:

* `netstat -an | find "27017"`

```bash
netstat -an | find "27017"
```

With this you will be able to know on which port the pc listens, usually there are 2 listening ports and you will have to take the TCP address that combines the port in this case 127.0.0.1:27017.

### `Command to know on which port you are listening`

To test the routes it is necessary to install an extension from the VS Code extensions called `Thunder Client` install it and start making Post and Gets for the respective routes.

