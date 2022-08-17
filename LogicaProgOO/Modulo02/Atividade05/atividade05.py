#Importando a biclioteca calc.py que criamos com a função calculadora
import calc
#Importando a biblioteca de recusos de função do sistema operacional
import os
import time
num1 = 0.0
num2 = 0.0
teste = 5
#Estrutura de repitição que vai repetir o programa principal
while(teste != 0):
    #Função para limpar o terminal, na execução do programa
    os.system("cls")
    #Programa Principal
    print(".::Calculadora da Softex::.\n")
    #Menu da nosso programa
    teste = int(input("Escolha uma opção: \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n0 - Sair\n"))
    #Valida as opções do menu
    if(teste >= 1 and teste <=4):
        num1 = float(input("Informe o primeiro número: "))
        num2 = float(input("Informe o segundo número: "))
        #Valida as operações
        if(teste == 1):
            print(num1, '+', num2, '=', calc.calculadora(num1, num2, '+'))
        elif(teste == 2):
            print(num1, '-', num2, '=', calc.calculadora(num1, num2, '-'))
        elif(teste == 3):
            print(num1, '*', num2, '=', calc.calculadora(num1, num2, '*'))
        elif(teste == 4):
            print(num1, '/', num2, '=', calc.calculadora(num1, num2, '/'))
        time.sleep(3)
    elif(teste == 0):
        print("Programa encerrado. Obrigado!\n")
    else:
        print("Opção inválida, escolha uma opção valida na próxima!\n")
        time.sleep(3)