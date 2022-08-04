nome = input("Digite o nome do Aluno: ")
nota01 = float(input("Digite a primeira nota: "))
nota02 = float(input("Digite a segunda nota: "))
faltas = int(input("Digite a quantidade de falta do Aluno:"))
media = (nota01 + nota02)/2.0
if faltas <= 3:
    if media >= 7.0:
        print("Parabéns", nome , "você foi aprovado, com média", media, "e", faltas, "faltas.")
    else:
        print(nome, "infelizmente você está reprovado por média, você ficou com", media, ".")
else:
    print(nome, "infelizmente você está reprovado por falta, com", faltas, "faltas.")
