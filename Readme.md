## important commands

### `command to run the server`

execute the "mongod" command from any cmd console:

* `mongod`

`Nota:` en caso de que te de un error  o la consola cierre inesperadamente la ejecucion del servidor es porque no tienes creada la ruta donde se guaradaran los archivos de ejecucion para ello antes debes crear la ruta en tu unidad principal C con este comando:

* `mkdir C:\data\db`

### `Command to know on which port you are listening`

Sometimes the localhots does not work correctly and it becomes necessary to know on which port or on which ip address the PC is running the API to give addresses or routes to the important parts in your application so from the cmd you can use this command:

* `netstat -an | find "27017"`

con esto podras saber en que puerto escucha el pc por lo general son 2 puesrtod de escucha y deberas tomar la direccion TCP que combina el puerto en esta caso 127.0.0.1:27017