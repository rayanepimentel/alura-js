
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    //Nos criamos metodos de leitura para acessar as variáveis, que são privadas. 
    //Ou seja só a própria class pode acessa-la. 
    //Mas podemos criar um atalho para acessar a propriedade somente leitura, criar o get
    //ex: get volume(){}

    // colocamos um get seguido de um método
    //este método tem o nome original da nossa propriedade, antes de usarmos o _ 
    //Quando eu uso este get antes do método, eu acesso esse método como se fosse uma propriedade.

     get volume() {
        return this._quantidade * this._valor; 
    }
    
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}
