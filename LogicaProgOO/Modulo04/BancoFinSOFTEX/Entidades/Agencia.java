package Modulo04.BancoFinSOFTEX.Entidades;

public class Agencia {
    private String numero;
    private String nome;
    private String email;
    private String telefone;

    public Agencia(String numero, String nome, String email, String telefone) {
        this.numero = numero;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    public String getNumero() {
        return numero;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    

}
