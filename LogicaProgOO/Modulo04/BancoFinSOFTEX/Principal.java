package Modulo04.BancoFinSOFTEX;

import java.util.Date;

import Modulo04.BancoFinSOFTEX.Entidades.Agencia;
import Modulo04.BancoFinSOFTEX.Entidades.Cliente;
import Modulo04.BancoFinSOFTEX.Entidades.Conta;

public class Principal {
    public static void main(String[] args) {
        //System.out.println("Olá mundo!");
        Cliente beth = new Cliente("Elizabeth Terceira", "123.456.789-00",  new Date(1992, 8, 29), "bethterc@softex.com", "8199867543" );
        Cliente carlos = new Cliente("Carlos Negromonte", "222.456.789-01",  new Date(1980, 10, 29), "carlosmonte@softex.com", "819978963");
        Agencia softex = new Agencia("1234-8", "Softex", "softex@softex.com", "813245678"); 
        Conta contaBeth = new Conta("12345-6", beth, softex, 1208, 800, new Date());
        Conta contaCarlos = new Conta("12389-6", carlos, softex, 808, 800, new Date());
        contaBeth.depositar(500);
        contaCarlos.depositar(4500);
        contaCarlos.sacar(500);
        contaCarlos.sacar(1200);
        contaBeth.sacar(360);
    }
}
