({
	retornarListaContas : function(component, event) {
		var action = component.get('c.buscarListaContas');
        
        action.setCallback(this, function(response){
			let resposta = response.getReturnValue();

			console.log('');
			console.log('', resposta);
            component.set('v.contas', resposta);
		});
        
        $A.enqueueAction(action);
	}
})
