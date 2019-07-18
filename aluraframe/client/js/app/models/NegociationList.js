class NegociationList{

    constructor(trap){
        this._negociations = [];
        this._trap = trap;

    }

    add(negociation){
        this._negociations.push(negociation);
        this._trap(this);
        // Reflect.apply(this._trap, this._context, [this]);            //class in javascript that reflect parameters    
    }

    get negociations(){
        return [].concat(this._negociations);
    }

    clear(){
        this._negociations = [];
        this._trap(this);
        // Reflect.apply(this._trap, this._context, [this]);             //class in javascript that reflect parameters    
    }

}