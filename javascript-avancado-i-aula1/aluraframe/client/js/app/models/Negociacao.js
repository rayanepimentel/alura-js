//as propriedades que contenham _ só poderão ser acessadas pelos 
//próprios métodos da classe. 
//Isto significa, que mesmo podendo imprimir a propriedade _quantidade 
//com outro valor, não deveríamos mais poder acessá-la. 
//O _ funciona como um aviso dizendo: "programador, você não pode alterar esta propriedade!".
class Negociacao {
    constructor(data, quantidade, valor) {
        this._date = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //métodos acessadores, utilizando o prefixo get
    //os métodos da classe poderão acessar os atributos que levam _. 
    //no entanto, de acordo com a nossa convenção, alguém fora da classe não poderá fazer o mesmo.
    // atributo privados;

    getVolume() {
        return this._quantidade * this._valor; 
    }
    
    getData() {
        return this._data
    }

    getQuantidade() {
        return this._quantidade
    }

    getValor() {
        return this.valor
    }

}
