# VideoVerifarma

La aplicación esta dividida en 2 secciones. HomeScreen donde se encuentran todos los videos traídos desde la API de Youtube, y ProfileScreen donde se le permite al usuario loguearse sin ninguna base de datos. En el caso de que el usuario inicie sesión, podrá ver en HomeScreen un nuevo formulario para subir videos.

Se implementó Async Storage, para que la información del usuario logueado persista aunque se cierre la aplicación. En el caso de querer cerrar sesion simplemente se dirige a ProfileScreen y presiona Cerrar Sesión.

Nota: Al utilizar Expo, tuve algunas limitaciones con las librerias para importar los componentes de Video. Por lo que cuando ejecuto un onPress en un TouchableOpacity que contiene un componente video, se cierra la app. Por lo tanto para que funcione, comenté el componente de Video en HomeScreen.

Una vez seleccionado el video, se navegará a una nueva screen de la navegación donde el usuario podrá ver el video y puntuarlo.
