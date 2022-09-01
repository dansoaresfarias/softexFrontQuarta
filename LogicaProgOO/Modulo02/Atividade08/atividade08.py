from turtle import pd
import pandas as pd

df = pd.read_csv('./LogicaProgOO/Modulo02/Atividade08/notas_aluno.csv')
df["Media"] = (df["Primeira Nota"]+df["Segunda Nota"])/2

df.loc[(df["Faltas"] > 5) | (df["Media"] < 7), "Situação"] = "REPROVADO"
df.loc[(df["Faltas"] <= 5) & (df["Media"] >= 7), "Situação"] = "APROVADO"

print("Média Geral:", df["Media"].median())

maiorMedia = df["Media"].max()
alunoMaiorMedia = df.query("Media==@maiorMedia")
print("O aluno", alunoMaiorMedia["Nome do Aluno"].values, "tem maior média:", maiorMedia)

maiorFaltas = df["Faltas"].max()
alunoMaiorFaltas = df.query("Faltas==@maiorFaltas")
print("O aluno", alunoMaiorFaltas["Nome do Aluno"].values, "tem maior número de faltas:", maiorFaltas)

df.to_csv('./LogicaProgOO/Modulo02/Atividade08/alunos_situacao.csv')

print(df.head)