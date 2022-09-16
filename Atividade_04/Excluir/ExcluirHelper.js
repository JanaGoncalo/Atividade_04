({
//Para executar a ação de exclusão.
    deltingCheckboxAccounts : function(component, event, deltIds) {
    
        var action = component.get('c.DeleteRecord');
        
        action.setParams({
            "DeleteIds": deltIds
        });
       //Obtendo resposta.
        action.setCallback(this, function(response) {
            var state = response.getState();
            //Se o estado for bem-sucedido, atualiza a exibição.
            if (state === "SUCCESS") {
                console.log('Inside delete'+state);
                //Atualizar a visualização.
                $A.get('e.force:refreshView').fire();
            }
        });
         
        $A.enqueueAction(action);
    }
})
