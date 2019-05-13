class NegociationController{

    constructor(){
        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');    
    }

    add(event){
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value.split('-').map((item, index) => { //transform into array with split and arrow function 
                if(index == 1){
                    return item -1;
                }           
                return item;
            })    
        );  

        console.log(data);
        
        
          let negociation = new Negociation(
             data,
             this._inputQuantidade.value,
             this._inputValor.value
          );
        
        console.log(negociation);
    }

}