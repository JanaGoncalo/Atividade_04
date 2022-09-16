public class CriarApex {
    @AuraEnabled
    public static void createAcc(Account acc) {
        insert acc;
    }
    @AuraEnabled
    public static List<Account> displayAcc() {
        return [SELECT Id,name,phone,AccountNumber,Website from Account limit 10];
    }
}
