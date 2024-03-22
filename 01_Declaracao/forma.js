class Forma{
    constructor(){
        this.tipoDeForma = "Forma Abstrata";

    }

    imprimeForma(){
        alert (`Tipo de Forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        //alert(`Tipo de forma: ${this.tipoDeForma}`);
    }


    calculaArea(){
        throw new Error ("O Método CaculaArea() Deve Ser Implementado Na Subclasse.")
    }

}