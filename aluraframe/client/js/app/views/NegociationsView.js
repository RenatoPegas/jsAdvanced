class NegociationsView extends View{

    constructor(element){
        super(element);
    }

    template(model){

        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.negociations.map(n => 
                             `
                                <tr>
                                    <td>${DateHelper.dateByText(n.data)}</td>
                                    <td>${n.quantidade}</td>
                                    <td>${n.valor}</td>
                                    <td>${n.volume}</td>
                                </tr>                            
                            `
                        ).join('')}
                    </tbody>

                    <tfoot>
                        <td colspan="3"></td>
                        <td>${
                            //(function(){                                                  
                        //         let total = 0;
                        //         model.negociations.forEach(n => total += n.volume);         //This is a IIFE (Imediatly Invoked Function Expression)
                        //         return total;
                        //     })()
                        model.negociations.reduce((total, n) => total + n.volume, 0.0)
                        }</td>
                    </tfoot>
                </table>
                `;
    }

    
}

