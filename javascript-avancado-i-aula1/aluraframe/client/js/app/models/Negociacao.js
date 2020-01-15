//cria a class e defino os atributos da minha negociação
//defino pela função constructor
//que ela vai ter uma data, quantiddade e valor this.
//a data  por padrão terá a data atual do sistema new Date()
//valor quantidade será 01 e valo 0.0


/*class Negociacao {
    constructor() {
        this.date = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }

}*/

// existe outra forma de passar os dados para uma instância de negociação
//queremos que seja definida a quantidade, valor e data
//que sejam passados imediatamente p constructor()
// passar os parâmetros para constructor
// e colocar(passar os param.) nas propriedades do meu objeto

class Negociacao {
    constructor(data, quantidade, valor) {
        this.date = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

}
