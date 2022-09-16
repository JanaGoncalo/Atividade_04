({
    handleSuccess: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Conta atualizada!",
            "message": "Conta foi atualizada com sucesso.",
            "variant": "success"
        });
    },

    handleError: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Erro!",
            "message": event.getParam("message"),
            "variant": "error"
        });
    }
})
