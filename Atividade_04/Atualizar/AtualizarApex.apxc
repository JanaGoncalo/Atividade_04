public class AtualizarApex {
    @AuraEnabled
    public static Case getCase(Id recordId){
        Case mycase = [SELECT Id, isClosed, Status FROM Case WHERE id=:recordId];
        return mycase;
    }
}
