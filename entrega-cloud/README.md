
- Primero hemos creado un proyecto básico usando el siguiente comando desde la raiz del repo del master: 

    - npm create vite@latest entrega-cloud -- --template react

- Seguidamente hemos instalado SCSS , TS y hemos configurado de forma báscia vitecon defineConfig().

- Después he refactorizado una app que tenía desarrollada por mi cuenta ( Una Pokedex que consume datos a traves de la PokeAPI) , para tener un proyecto con diversas funcionalidades a la hora de desplegarlo.

- A continuacion he instalado npm-run-all para poder ejecutar varios scripts en paralelo.

    - npm install --save-dev npm-run-all

- Ahora vamos con gh-pages, para instalarlo usaremos:

    - npm install gh-pages --save-dev

- Seguidamente creamos en la raiz del repo la carpeta .github/worflows con el archivo deploy.yml configurado

- Procedemos a agregar los scripts necesarios para el despliegue:

    - "predeploy": "npm run build",

      "deploy": "gh-pages -d dist"


- A pesar de todos los esfuerzos la build falla, necesito ayuda de un mentor.      