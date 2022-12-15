package Modulo04.BancoFinSOFTEX.Entidades;

import java.util.Date;

/**
 * Cliente
 */
public class Cliente {

    private String nome;
    private String cpf;
    private Date dataNasc;
    private String email;
    private String telefone;

    public Cliente(String nome, String cpf, Date dataNasc, String email, String telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public Date getDataNasc() {
        return dataNasc;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

}