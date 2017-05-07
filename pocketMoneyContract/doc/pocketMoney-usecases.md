# pocketMoney use cases

![modelImage](UseCaseDiagram.PNG) 

## actors

|Actor name|use cases|doc|
|---|---|---|
|Donor|deposite pocket money|The donor is the ine providing the money.|
|Owner|change owner, manage distribution parameter|The owner is per default the creator of the contract and responisible for managing it.|
|Recipient|claim pocket money|The recipent is the one able to claim and withdraw the money.|


## use cases

### deposite pocket money


used by: Donor

### claim pocket money

When claiming the available amount is send to the recipent.


used by: Recipient

### change owner


used by: Owner

### manage distribution parameter

The distribution parameters are:
-amount to claim
-timeframe for distribution
-recipent address
-donor address


used by: Owner

