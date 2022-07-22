


meioTrans = input("O transporte que você escolheu é terrestre? (s-sim | n-não)")
if meioTrans == "s":
    qtdPessoas = input("Cabe apenas uma pessoa? (s-sim | n-não)")
    if qtdPessoas == 's':
        peso = input("O transporte escolhido é pesado? (s-sim | n-não)")
        if peso == "s":
            print("Você escolheu o TRATOR!")
        else:
            print("Você escolheu a BICICLETA!")
    elif qtdPessoas == 'n':
        ...

