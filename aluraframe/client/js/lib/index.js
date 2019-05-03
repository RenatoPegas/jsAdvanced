var fields = [                                                                      //
    document.querySelector('#data'),                                                //
    document.querySelector('#quantidade'),                                          //  create an array with form fields of DOM 
    document.querySelector('#valor')                                                //
];                                                                                  //

var tBody = document.querySelector('table tbody');                                  

document.querySelector('.form').addEventListener('submit', function(event){
    
    event.preventDefault();                                                         // prevent of clean fields of summit in HTML5
    var tr = document.createElement('tr');
    
    fields.forEach(function(field){                                                 // pass for all fields of array 'field'

        var td = document.createElement('td');                                      
        td.textContent = field.value;
        tr.appendChild(td);                                                         // append 'td' in 'tr'

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = fields[1].value * fields[2].value;

    tr.appendChild(tdVolume);

    tBody.appendChild(tr);

    fields[0].value = '';                                                           //
    fields[1].value = 1;                                                            // clean all fields
    fields[2].value = 0;                                                            //
    fields[0].focus();                                                              //

});