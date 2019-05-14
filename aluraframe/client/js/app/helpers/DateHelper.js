class DateHelper{
    
    constructor(){
        throw new Error("DateHelper can't be instancieted");
    }

    static dateByText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`  //creation of template string
    }

    static textByDate(text){

        if(!/\d{4}-\d{2}-\d{2}/.test(text)){                                     //regular expression to check the correct date
            throw new Error ("Need to be in american format");
        }

        return new Date (...text.split('-').map((item, index) => {               //transform into array with split and arrow function 
            
            if (index == 1) { return item - 1; }                                 //decrement the wrong date in mounth 
            return item;                                                         //return element in array
                                                                                
        }))    
    }
}