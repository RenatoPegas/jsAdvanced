class MessageView extends View{

    constructor(element) {
        super(element);
    }

    template(model){

        if(model.text){
            return `<p class='alert alert-info'>${model.text}</p>`;
        }else{
            return `<p></p>`
        }    
    }    
}