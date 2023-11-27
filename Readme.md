## important commands

### `command to run the server`

execute the "mongod" command from any cmd console:

* `mongod`

`Note:` In case you get an error or the console unexpectedly closes the server execution it is because you have not created the path where the execution files will be saved for it before you must create the path in your main drive C with this command:

* `mkdir C:\data\db`

### `Command to know on which port you are listening`

Sometimes the localhots does not work correctly and it becomes necessary to know on which port or on which ip address the PC is running the API to give addresses or routes to the important parts in your application so from the cmd you can use this command:

* `netstat -an | find "27017"`

con esto podras saber en que puerto escucha el pc por lo general son 2 puesrtod de escucha y deberas tomar la direccion TCP que combina el puerto en esta caso 127.0.0.1:27017