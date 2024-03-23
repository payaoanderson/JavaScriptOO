class Forma{
    constructor(tipoDeForma = "Forma Abstrata"){
        //this.tipoDeForma = "Forma Abstrata";
        this.tipoDeForma = tipoDeForma;

    }

    imprimeForma(){
        try {
        alert (`Tipo de Forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        console.log("aqui");
    }catch (error){
        alert("o codigo esta com erro");
    }

    }
    calculaArea(){
        throw new Error ("O Método CaculaArea() Deve Ser Implementado Na Subclasse.")
    }

}