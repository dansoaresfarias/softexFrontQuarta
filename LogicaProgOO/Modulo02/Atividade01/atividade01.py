nome = input("Digite o nome do Aluno: ")
nota01 = float(input("Digite a primeira nota: "))
nota02 = float(input("Digite a segunda nota: "))
faltas = int(input("Digite a quantidade de falta do Aluno:"))
media = (nota01 + nota02)/2.0
if media >= 7.0 and faltas <= 3 :
    print("Parabéns", nome , "você foi aprovado.")
else :
    print(nome, "infelizmente você está reprovado.")
