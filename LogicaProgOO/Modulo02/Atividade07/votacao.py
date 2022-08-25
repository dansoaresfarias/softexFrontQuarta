import cadastro

qtdCarlos = 0
qtdPedro = 0
qtdMaria = 0
qtdBranco = 0

print(".:: Sistema de Votação da Softex ::.")
while(True):
    try:
        print("Bem-vindo a votação!\nCandidatos:")
        print("\t",cadastro.candidatos.Carlos.name, "-", cadastro.candidatos.Carlos.value)
        print("\t",cadastro.candidatos.Maria.name, "-", cadastro.candidatos.Maria.value)
        print("\t",cadastro.candidatos.Pedro.name, "-", cadastro.candidatos.Pedro.value)
        print("\t",cadastro.candidatos.Branco.name, "-", cadastro.candidatos.Branco.value)
        voto = int(input("Informe seu voto, digitando o número referente ao seu candidato: "))
        if(voto == cadastro.candidatos.Carlos.value):
            qtdCarlos+=1
        elif(voto == cadastro.candidatos.Maria.value):
            qtdMaria+=1
        elif(voto == cadastro.candidatos.Pedro.value):
            qtdPedro+=1
        elif(voto == cadastro.candidatos.Branco.value):
            qtdBranco+=1
        else:
            qtdBranco+=1
        op = input("Deseja encerrar a votação? (s-sim | n-não): ")
        if(op == "s"):
            if(qtdCarlos > qtdMaria and qtdCarlos > qtdPedro):
                print("O", cadastro.candidatos.Carlos.name,"foi o vencedor!")
            elif(qtdMaria > qtdCarlos and qtdMaria > qtdPedro):
                print("O", cadastro.candidatos.Maria.name,"foi o vencedor!")
            elif(qtdPedro > qtdCarlos and qtdPedro > qtdMaria):
                print("O", cadastro.candidatos.Pedro.name,"foi o vencedor!")
            else:
                print("Votação empatada, vamos para o segundo turno!")
            print("\nExtrato da votação:")
            print(cadastro.candidatos.Carlos.name, "-", qtdCarlos)
            print(cadastro.candidatos.Maria.name, "-", qtdMaria)
            print(cadastro.candidatos.Pedro.name, "-", qtdPedro)
            print(cadastro.candidatos.Branco.name, "-", qtdBranco)
            break
        else:
            print("\nVamos para o próximo voto.\n")
    except ValueError:
        print("Você digitou algo diferente de um número, vote novamente! \n\n")
    
