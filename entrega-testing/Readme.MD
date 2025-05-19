
- Comenzamos creando una nueva rama para los ejercicios obligatorios del lab llamada "feature/laboratorio-testing-obligatorio".

- Instalamos dependencias y ejecutamos audit-fix.


- Primero vamos con el mapper, queremos testear mapProjectFromApiToVm:

     Vamos a testear los siguientes casos: 

    1) - Mapeo correcto de un proyecto completo:

                Preparamos un objeto apiProject con datos completos, incluyendo una lista de empleados.

                Mockeamos mapToCollection para que devuelva directamente el array de empleados, sin ejecutar su código real.

                Comprobamos que mapProjectFromApiToVm devuelve un objeto con todos los campos correctamente mapeados.

                Esto valida que el mapper transforma correctamente la estructura principal del proyecto.

    2) - Devolver proyecto vacío cuando el input es null:

                Llamamos a la función con null.

                Comprobamos que devuelve un proyecto vacío, creado con la función createEmptyProject del ViewModel.

    3) - Devolver proyecto vacío cuando el input es undefined:

                Igual que el caso anterior, pero con undefined.

    4) - Mapeo de empleados a un array vacío cuando employees está vacío:

                Creamos un proyecto donde la propiedad employees es un array vacío.

                En este test no mockeamos mapToCollection porque su implementación ya maneja correctamente este caso devolviendo un array vacío.

                Validamos que el resultado tiene la propiedad employees como un array vacío.

    - Hemos añadido un script "test:mapper": "vitest src/pods/project/project.mapper.spec.ts" para ejecutar estos test exclusivamente y tener mejor legibilidad a la hora de comprobar el funcionamiento del mapper.

- Ahora vamos con el componente ConfirmationDialogComponent:

    Casos que nos interesa testear:

    1) - Confirmar que el componente renderiza bien cuando le pasamos correctamente las props.
        

    2) - Que los botones llaman las funciones correctas.  
        
       
    3) - Que el hook gestiona bien el estado y los métodos (onOpenDialog, onClose, onAccept).    ç
          
       

-          

       

            

