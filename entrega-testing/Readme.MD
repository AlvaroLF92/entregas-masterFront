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

  1. - Verifica que el componente muestre el contenido del diálogo correctamente cuando isopen=true. 

      ¿Qué comprueba?

      Que el texto del children (mensaje de confirmación) se renderiza en el DOM.

      Demuestra que el componente es visible cuando se espera.

  2) - Comprueba que al hacer clic en el botón "Cancelar", se llama a la función onClose.

      ¿Qué comprueba?
      
      Que se ejecuta correctamente la función proporcionada para cerrar el diálogo.

      Que el componente responde a eventos del usuario.

  3) - Verifica que al hacer clic en el botón "Aceptar", se dispare la función onAccept.

      ¿Qué comprueba?

      Que se ejecuta correctamente la acción de aceptación.

      Que el componente ejecuta correctamente el callback recibido como prop.
  

- Por último dentro del laboratorio obligatorio vamos a añadir tests al hook confirmation-dialog.hook.ts

  Casos que nos interesa testear:

  1) - Comprueba que el hook se inicializa correctamente.

        ¿Qué comprueba?
    
        isOpen es false al inicio.

        itemToDelete está vacío usando createEmptyLookup().


  2) - Verifica que al llamar a onOpenDialog(item), el estado del diálogo se actualiza correctamente.

       ¿Qué comprueba?
     
       El estado isOpen cambia a true.

       El valor de itemToDelete se establece con el item recibido.  

  3) - Verifica que onClose cierre el diálogo correctamente.

       ¿Qué comprueba?

       El estado isOpen cambia a false.    

  4) - Comprueba que onAccept limpia el valor de itemToDelete.

       ¿Qué comprueba?
       
       itemToDelete vuelve a su estado vacío con createEmptyLookup().      