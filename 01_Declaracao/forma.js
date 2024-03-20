class Forma{
    constructor(){
        this.tipoDeForma = "Forma Abstrata";

    }

    imprimeForma(){
        alert(`Tipo de forma: ${thi.tipoDeForma}`);
    }


    calculaArea(){
        throw new Error ("O Método CaculaArea() Deve Ser Implementado Na Subclasse.")
    }

}