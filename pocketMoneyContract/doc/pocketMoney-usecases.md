# pocketMoney use cases

![modelImage](UseCaseDiagram.PNG) 

## actors

|Actor name|use cases|doc|
|---|---|---|
|Recipient|claim pocket money|The recipent is the one able to claim and withdraw the money.|
|Owner|change owner, manage distribution parameter|The owner is per default the creator of the contract and responisible for managing it.|
|Donor|deposite pocket money|The donor is the ine providing the money.|


## use cases

### change owner


used by: Owner

### claim pocket money

When claiming the available amount is send to the recipent.


used by: Recipient

### deposite pocket money


used by: Donor

### manage distribution parameter

The distribution parameters are:
-amount to claim
-timeframe for distribution
-recipent address
-donor address


used by: Owner

