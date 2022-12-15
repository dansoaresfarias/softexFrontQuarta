package Modulo04.BancoFinSOFTEX.Entidades;

import java.util.Date;

public class Conta {
    private String numero;
    private Cliente cliente;
    private Agencia agencia;
    private double saldo;
    private double limite;
    private Date dataIni;
    private static int totalContas = 0;

    public Conta(String numero, Cliente cliente, Agencia agencia, double saldo, double limite, Date dataIni) {
        this.numero = numero;
        this.cliente = cliente;
        this.agencia = agencia;
        this.saldo = saldo;
        this.limite = limite;
        this.dataIni = dataIni;
        this.totalContas++;
    }

    public Conta(){

    }

    public boolean depositar(double valor){
        if(valor<0){
            return false;
        }else{
            this.saldo += valor;
            return true;
        }        
    }

    public boolean sacar(double valor){
        if((this.saldo + this.limite)<valor){
            return false;
        }else {
            this.saldo -= valor;
            return true;
        }
    }
    
    public boolean transfesrir(double valor, Conta contaFav){
        if((this.saldo + this.limite) >= valor){
            this.saldo -= valor;
            contaFav.saldo += valor;
            return true;
        }else{
            return false;
        }
    }

    public String getNumero() {
        return numero;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public Agencia getAgencia() {
        return agencia;
    }

    public void setAgencia(Agencia agencia) {
        this.agencia = agencia;
    }

    public double getSaldo() {
        return saldo;
    }

    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        this.limite = limite;
    }

    public Date getDataIni() {
        return dataIni;
    }

    public static int getTotalContas() {
        return totalContas;
    }

    public Conta clone(){
        Conta clone = new Conta();
        clone.numero = this.numero;
        clone.cliente = this.cliente;
        clone.agencia = this.agencia;
        clone.saldo = this.saldo;
        clone.limite = this.limite;
        clone.dataIni = this.dataIni;
        return clone;
    }

}
