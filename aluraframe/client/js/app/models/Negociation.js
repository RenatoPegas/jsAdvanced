class Negociation {

    constructor(data, quantidade, valor){
        this._data = new Date (data.getTime());              //defensive programming
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); 
    }

    get data(){                                             //get is a propriety with "only read"
        return new Date(this._data.getTime());              //defensive programming
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}