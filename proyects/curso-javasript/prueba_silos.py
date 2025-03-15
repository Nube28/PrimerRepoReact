import silos

def main():
    while True:
        tipo = input("Ingrese el tipo de silo (C para Cilíndrico, E para Esférico): ").strip().upper()
        calibre = int(input("Ingrese el calibre de la lámina (0 o 1): "))
        
        if tipo == 'C':
            radio = float(input("Ingrese el radio del silo cilíndrico (m): "))
            altura = float(input("Ingrese la altura del silo cilíndrico (m): "))
            superficie = silos.superficieSiloCilindrico(radio, altura)
            volumen = silos.volumenSiloCilindrico(radio, altura)
            costo = silos.costoSiloCilindrico(radio, altura, calibre)
        elif tipo == 'E':
            radio = float(input("Ingrese el radio del silo esférico (m): "))
            base = input("Ingrese el tipo de base (S para simple, R para reforzada): ").strip().upper()
            superficie = silos.superficieSiloEsferico(radio)
            volumen = silos.volumenSiloEsferico(radio)
            costo = silos.costoSiloEsferico(radio, calibre, base)
        else:
            print("Tipo de silo inválido.")
            continue
        
        print(f"Superficie: {superficie:.2f} m²")
        print(f"Volumen: {volumen:.2f} m³")
        print(f"Costo: ${costo:.2f}")
        
        repetir = input("¿Desea calcular otro silo? (S/N): ").strip().upper()
        if repetir != 'S':
            break

if __name__ == "__main__":
    main()