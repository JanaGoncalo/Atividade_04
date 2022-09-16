({
    //função para mostrar os registros de leads.
    init : function(component, event, helper) {
        //Colunas da tabela de dados.
        component.set('v.columns', [
            {label: 'Lead name', fieldName: 'Name', type: 'text'},
            {label: 'Company', fieldName: 'Company', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
            {label: 'Email', fieldName: 'Email', type: 'Email'},
            {label: 'Status', fieldName: 'Status', type: 'Picklist'}
             
        ]);
        
        var action = component.get('c.featchLead');
        action.setCallback(this, function(response) {
            //armazenar estado de resposta
            var state = response.getState();
            if (state === "SUCCESS") {
                //Armazenando a resposta do lado do servidor.
                component.set('v.data', response.getReturnValue());               
            }
        });
        $A.enqueueAction(action);
    },
    //Função para buscar recordIds de cada linha e mostrar a contagem.
    updateSelectedText: function (component, event) {
        //Obter linhas de caixa de seleção selecionadas.
        var selectedRows = event.getParam('selectedRows');
        //Armazenar uma contagem em um atributo.
        component.set('v.selectedRowsCount', selectedRows.length);
        //Armazenado em var para exibir a contagem no console.
        var slectCount =selectedRows.length;
        console.log('slectCount'+slectCount);
        //Variável criado para armazenar IDs de registro para caixas de seleção selecionadas. 
        var setRows = [];
        for ( var i = 0; i < selectedRows.length; i++ ) {
             
            setRows.push(selectedRows[i]);
             
        }
        
        component.set("v.selectedLeads", setRows);
        console.log('selected data:'+setRows);
 
        //Adicionada esta condição para mostrar o botão "Excluir".
        //Somente quanda a caixa de seleção estiver selecionada.
        if(slectCount>0){
            component.set('v.ButtonShow', true);
        }else{
            component.set('v.ButtonShow', false);
        }
    },
 
    //Função para lidar com uma funcionalidade de exclusão.
    handleClick : function(component, event, helper){
        
        var records = component.get("v.selectedLeads");
        
        console.log(records);
        
        helper.deltingCheckboxAccounts(component, event, records);
    },
 
    //Função para confirmar a exclusão.
    handleConfirmDialog : function(component, event, helper) {
        component.set('v.showDeleteBox', true);
    },
 
    //Função para Cancelar a exclusão.
    handleConfirmDialogCancel : function(component, event, helper) {
        console.log('Cancel');
        component.set('v.showDeleteBox', false);
    },
})
