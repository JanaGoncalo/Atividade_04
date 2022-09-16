public class BuscarApex
{
	@AuraEnabled
    public static List<Account> buscarListaContas()
    {
        List<Account> listaContas = [Select Id, Name, Phone From Account Where Phone != null AND Name != null];
        
        return listaContas;
    }
}
