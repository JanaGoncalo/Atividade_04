({
     //Função criar contas
    CreateAccount : function(component, event, helper) {
        
        var action = component.get('c.createAcc');
        
        action.setParams({
            "acc": component.get('v.AccountList')
        });
        action.setCallback(this, function(response) {

            var state = response.getState();
            if (state === "SUCCESS") {
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Successo!",
                    "message": "Conta criada com sucesso."
                });
                toastEvent.fire();   
                 
            }
        });
        $A.enqueueAction(action);
    },
    //Função para exibir as contas.
    displayAccount : function(component, event, helper) {
        
        var action = component.get('c.displayAcc');
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            if (state === "SUCCESS") {
                
                 component.set('v.AccListToDisplay', response.getReturnValue());               
            }
        });
        $A.enqueueAction(action);
    }
})
