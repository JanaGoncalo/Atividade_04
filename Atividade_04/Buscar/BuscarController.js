({
	init : function(component, event, helper) {
		component.set('v.columns', [
            {label: 'Nome da Conta', fieldName: 'Name', type: 'text'},
            {label: 'Telefone', fieldName: 'Phone', type: 'Phone'},
            {label: 'Descrição', fieldName: 'Descrição', type: 'text'}
        ]);
        
        helper.retornarListaContas(component, event);
	}
})
