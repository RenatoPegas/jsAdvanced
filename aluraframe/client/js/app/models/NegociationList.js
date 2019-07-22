class NegociationList{

    constructor(){
        this._negociations = [];


    }

    add(negociation){
        this._negociations.push(negociation);
  
        // Reflect.apply(this._trap, this._context, [this]);            //class in javascript that reflect parameters    
    }

    get negociations(){
        return [].concat(this._negociations);
    }

    clear(){
        this._negociations = [];

        // Reflect.apply(this._trap, this._context, [this]);             //class in javascript that reflect parameters    
    }

}