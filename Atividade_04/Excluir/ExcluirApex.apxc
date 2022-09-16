public class ExcluirApex {
@AuraEnabled
    public static List<Lead> featchLead() {
    //Retornando a lista de leads.
        return [SELECT Id, Name,Company,Status,Phone,Email FROM Lead];
    }
      
     @AuraEnabled
    public static void DeleteRecord(List<Lead> DeleteIds) {
        List<Lead> delacccon = new List<Lead>();
        for(Lead con : [SELECT Id, Name,Company,Status,Phone,Email FROM Lead WHERE Id IN : DeleteIds]){
            delacccon.add(con);
        }
         
        if(delacccon.size() > 0){
            Delete  delacccon;
        }
         
    }
}
