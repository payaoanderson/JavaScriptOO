class QuadradoColorido extends Quadrado{
    constructor (lado,cor){
        super(lado);
        this.cor = cor;
    }


    imprimeForma(){
        try {
        alert (`Tipo de Forma: ${this.tipoDeForma} ${this.cor} - Área: ${this.calculaArea()}`);
        console.log("aqui");
    }catch (error){
        alert("o codigo esta com erro");
    }

    }
}