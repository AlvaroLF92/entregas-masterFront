Seguimiento de la práctica:

1 - Inicializamos el proyecto:

    npx nuxi init nuxt-todo-app

2 - Creamos la estructura de carpetas:

- nuxt-todo-app {
  .nuxt
  .output
  components
  pages  
   public
  server
  stores
  .gitignore
  app.vue
  nuxt.config.ts
  package-lock.json
  package.json
  Readme.md
  tsconfig.json
  }


3 - Instalar Pinia y el plugin de persistencia:

      npm install @pinia/nuxt pinia-plugin-persistedstate

4 - Configuracion de Nuxt para usar Pinia:

    export default defineNuxtConfig({

    modules: ['@pinia/nuxt'],
    devtools: { enabled: true },
    compatibilityDate: '2024-11-01'

    })

5 - Creamos un archivo en plugins/piniaPersist.client.ts para poder utilziar el plugin en todos los stroes que creemos después.

6 - Creamos el store "todo.ts" , donde almacenaremos nuestro estado en la store de Pinia, hemos definido los métodos básicos para agregar, eliminar y completar tareas , lo que sería un CRUD básico. Tambien hemos añadido persistencia con "persist:true",  se plantea añadir posteriormente mas funcionalidad.

7 - Ahora, crearemos los componentes TodoForm Todoitem y TodoList;

        - TodoForm : Nuestro formulario para añadir tareas a la lista de pendientes, limpia el campo después y conecta directamente con la store de Pinia.
        - TodoList : Se encarga de mostrar las listas y filtrar el contenido a mostrar de la store,
        - TodoItem : Se renderiza dentro de todolist y representa cada tarea individual, permite completarlas , editarlas y borrarlas.

8 - Ahora modificaremos TodoList para agregar el filtrado de tareas por "completadas / pendientes / todas ".

9 - Se han modificado los estilos, especialmente los de TodoList para hacer la app responsive y adecuada a dispositivos móviles.

10 - Hemos añadido opciones a TodoList para marcar todas las tareas como completadas, desmarcarlas y borrarlas como conjunto.También se ha añadido un botón para ordenarlas alfabéticamente, evitando hacerlo de forma automática para tener la opción de ordenarlas manualmente con VueDraggable, cosa que vamos a instalar seguidamente:

   - npm install vuedraggable@next

11 - Realizaremos unos retoques finales de estilos para finalizar la entrega.
