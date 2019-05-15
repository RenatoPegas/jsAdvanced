class NegociationController{

    constructor(){
        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');    
        this._negociationList = new NegociationList();

        this._negociationsView = new NegociationsView($('#negociationsView'));
        this._negociationsView.update(this._negociationList);
    }

    add(event){
        event.preventDefault();
           
        this._negociationList.add(this._createNegociation());
        this._negociationsView.update(this._negociationList);
        this._clearForm(); 
    }

    _createNegociation(){

        return new Negociation(                                     //invoke a new instance of class 'Negociation'
            DateHelper.textByDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _clearForm(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value= 0.0;

        this._inputData.focus();
    }
    
}