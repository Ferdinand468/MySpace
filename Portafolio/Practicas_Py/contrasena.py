import random
import string


def generar_contrasena(longitud=12):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    contrasena = ''.join(random.choice(caracteres, k=longitud))
    return contrasena


# Interfaz sencilla en consola
if __name__ == "__main__":
    print("=== Generador de Contraseñas Seguras ===")
    try:
        longitud = int(
            input("Introduce la longitud deseada para la contraseña: "))
        if longitud < 8:
            print("⚠️ Se recomienda una longitud mínima de 8 caracteres por seguridad.")
        print(f"🔒 Contraseña Generada: {generar_contrasena(longitud)}")
    except ValueError:
        print("❌ Error: Introduce un número válido.")
