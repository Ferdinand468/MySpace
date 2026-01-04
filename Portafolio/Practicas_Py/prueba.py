import os
# Libreria para manipular el sistema operativo

archivos = os.listdir()
# Utilizamos la función de la libreria

for i in archivos:
    print("Los archivos de sistema son: ", i)
# Esta función guarda todos los archivos de un directorio en una lista para sumanipulación
