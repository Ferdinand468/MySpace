import time
# Importamos libreria
print("Hola trotamundos solitario")
# primer mensaje
time.sleep(5)
# utilizamos la libreria importada
print("Hola de nuevo yermense")
# segundo mensaje

variable_1 = 5
variable_2 = 2
variable_3 = 9
# Declaramos variables
print(
    f"La primera variable es {variable_1}, la segunda es {variable_2} y la tercera es {variable_3}")
# Impresión de f string para imprimir solo variables en el orden que qeramos
print("La primera variable es {}, la segunda es {} y la tercera es {}".format(
    variable_1, variable_2, variable_3))
# Impresión utilizando .format para imprimir solo variables en el orden que qeramos

print("El resultado de la operacion es:", variable_1 * variable_2 + variable_3)
# Imprimimos un mensaje junto con una operación

lista = [2, 4, 6, 8, 10, "Esto no es un numero", 12, 14, 16, 18, 20]
# Arreglo o lista con un string dentro
print(lista[5])
# Impresión de un índice del arreglo
lista.append(22)
# append se utiliza para añadir un valor a una lista
print(lista)

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in lista:
    print("En esta vuelta el indice vale: ", i)
