// LABORATORIO OBLIGATORIO


- Comenzamos creando una nueva rama para los ejercicios obligatorios del lab llamada "feature/laboratorio-testing-obligatorio".

- Instalamos dependencias y ejecutamos audit-fix.

- Primero vamos con el mapper, queremos testear mapProjectFromApiToVm:

  Vamos a testear los siguientes casos:

  1.  - Mapeo correcto de un proyecto completo:

               Preparamos un objeto apiProject con datos completos, incluyendo una lista de empleados.

               Mockeamos mapToCollection para que devuelva directamente el array de empleados, sin ejecutar su código real.

               Comprobamos que mapProjectFromApiToVm devuelve un objeto con todos los campos correctamente mapeados.

               Esto valida que el mapper transforma correctamente la estructura principal del proyecto.

  2.  - Devolver proyecto vacío cuando el input es null:

               Llamamos a la función con null.

               Comprobamos que devuelve un proyecto vacío, creado con la función createEmptyProject del ViewModel.

  3.  - Devolver proyecto vacío cuando el input es undefined:

               Igual que el caso anterior, pero con undefined.

  4.  - Mapeo de empleados a un array vacío cuando employees está vacío:

               Creamos un proyecto donde la propiedad employees es un array vacío.

               En este test no mockeamos mapToCollection porque su implementación ya maneja correctamente este caso devolviendo un array vacío.

               Validamos que el resultado tiene la propiedad employees como un array vacío.

  - Hemos añadido un script "test:mapper": "vitest src/pods/project/project.mapper.spec.ts" para ejecutar estos test exclusivamente y tener mejor legibilidad a la hora de comprobar el funcionamiento del mapper.

- Ahora vamos con el componente ConfirmationDialogComponent:

  Casos que nos interesa testear:

  1. - Verificar que el componente muestre el contenido del diálogo correctamente cuando isopen=true. 

      Que necesitamos verificar en el test:  

      - Que el texto del children (mensaje de confirmación) se renderiza en el DOM.

      - Demostrar que el componente es visible cuando se espera.

  2) - Comprobar que, al hacer clic en el botón "Cancelar", se llama a la función onClose.

      Como hacemos esto:
      
      Comprobando que se ejecuta correctamente la función proporcionada para cerrar el diálogo y que el componente responde a eventos del usuario.

     

  3) - Verificar, por útlimo que, al hacer clic en el botón "Aceptar", se dispare la función onAccept.

      Copmo lo hacemos:

      - Comprobando que se ejecuta correctamente la acción de aceptación y que el componente ejecuta correctamente el callback recibido como prop.

      
  

- Por último dentro del laboratorio obligatorio vamos a añadir tests al hook confirmation-dialog.hook.ts

  Casos que nos interesa testear:

  1) - Necesitamos comprobar que el hook se inicializa correctamente.

        Para que sea existoso necesitamos comprobar que: 
    
        -isOpen sea false al inicio.

        -itemToDelete este vacío usando createEmptyLookup().


  2) - Ahora necesitamos comprobar que el estado del diálogo se actualiza correctamente:

       Necesitamos verificae que al llamar a onOpenDialog(item):

       -El estado isOpen cambia a true.

       -El valor de itemToDelete se establece con el item recibido.  

  3) - Seguidamente queremos asegurarnos de que onClose cierre el diálogo correctamente.

       El estado isOpen cambia a false.    

  4) - Y , por último comprobar que onAccept limpia el valor de itemToDelete.

       - itemToDelete vuelve a su estado vacío con createEmptyLookup().      














// LABORATORIO OPCIONAL

Comenzaremos el laboratorio opcional con los test unitarios para spinner.tsx , antes de comenzar con la pipeline y los test e2e.

- Vamos con los test de spinner.component.tsx:

    Este componente se muestra cuando promiseInProgress es true , por lo que vamos a testear ambas casuísticas:

    1)  - promiseInprogress = true :

        - Necesitamos un mock del hook para simular una promesa activa.

        - Utilizamos getByRole puesto que el loader esta dentro de un modal de MUI.

        - Comprobamos con expect / toBeInDocument que se ha renderizado.

    2) - Muy parecido al test anterior , con la diferencia de que no necesitamos el mock puesto que promiseInProgress será false y sólo necesitamos comprobar que no se está renderizando.

Ahora vamos a pasar a crear .github/workflows/unit-tests.yml para añadir al proyecto nuestra pipeline de CI y poder ejecutar nuestros test cada vez que hagamos un push o PR.
   