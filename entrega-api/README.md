
# Proyecto Rick & Morty App / entrega-restAPI

Este proyecto permite consumir datos de personajes de Rick and Morty usando dos modos:

- API real: Consume la API pública https://rickandmortyapi.com/api/character

- Servidor mock local: Un servidor Node.js local que simula las respuestas para desarrollo offline o pruebas, permitiendo sobreescribir y guardar un campo en el detalle de cada personaje.


## Cómo cambiar entre los modos

El proyecto usa variables de entorno para activar el modo mock o el modo API real. 

Para ello, se han añadido scripts al proyecto para automatizar el cambio en la variable de entorno ( mediante "cpy-cli" ) y poder levantar el proyecto fácilmente con el servidor mock o la api: 

. npm run start:dev:mock ( levantamos el front confgurado para usar el server mock)

    - En el caso del serever mockeado, necesitaremos otra consola en la que levantaremos el servidor mock con npm run start:server

. npm run start:dev:api ( levantamos el front consumiendo los datos de la API )


// Ejercicio 1:


- Se han adaptado las pods ( hotel => character // hotel-collection => character-collection ) y adaptado su funcionalidad para el ejercicio. 

- Se ha modificado la scene tambien para renderizar los container de collection y character.

- Se han adaptado las rutas y creado los servicios tanto para la lista como para el detalle.

// Ejercicio 2:

- Se ha instalado cpy-cli para ayudar a manejar el cambio de entorno sopbreescribiendo los archivos env a la hora de trabajar con el servidor mock o la api.

- El usuario tiene permitido modificar y guardar el campo "bestSentence" , se ha comprobado que el servidor mockeado de Node registra las peticiones y realiza los cambios de forma exitosa, esto no se relfeja en la aplicación puesto que no se le ha añadido persistencia.





