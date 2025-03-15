import math

def superficieSiloCilindrico(radio=1.0, altura=2.0):
    return 2 * math.pi * radio * (radio + altura)

def superficieSiloEsferico(radio=1.5):
    return 4 * math.pi * radio**2

def volumenSiloCilindrico(radio=1.0, altura=2.0):
    return math.pi * radio**2 * altura

def volumenSiloEsferico(radio=1.5):
    return (4/3) * math.pi * radio**3

def costoSiloCilindrico(radio=1.0, altura=2.0, calibreLamina=0):
    costo_lamina = 60 if calibreLamina == 0 else 45
    return superficieSiloCilindrico(radio, altura) * costo_lamina

def costoSiloEsferico(radio=1.5, calibreLamina=0, tipoBase='S'):
    costo_lamina = 60 if calibreLamina == 0 else 45
    costo_base = 600 if tipoBase == 'S' else 900
    return superficieSiloEsferico(radio) * costo_lamina + costo_base

if __name__ == "__main__":
    print("Pruebas del módulo silos.py")
    print("Superficie Cilíndrica (radio=2, altura=3):", superficieSiloCilindrico(2, 3))
    print("Volumen Cilíndrico (radio=2, altura=3):", volumenSiloCilindrico(2, 3))
    print("Costo Cilíndrico (radio=2, altura=3, calibre=1):", costoSiloCilindrico(2, 3, 1))
    print("Superficie Esférica (radio=2):", superficieSiloEsferico(2))
    print("Volumen Esférico (radio=2):", volumenSiloEsferico(2))
    print("Costo Esférico (radio=2, calibre=1, base='R'):", costoSiloEsferico(2, 1, 'R'))