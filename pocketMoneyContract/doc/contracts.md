# contracts


* [PocketMoneyContract](#contract-pocketmoneycontract)


## contract: PocketMoneyContract

    overview:
	constructor PocketMoneyContract()
	function claimPocketMoney() public  onlyRecipient() 
	function isInitalized() private  returns (bool )
	function () public  payable 



A contract to manage pocket money for one recipient.




#### PocketMoneyContract properties

name|type|visiblity|delegate|doc
----|----|----|----|----
owner|address|public||
donator|address|public||
recipient|address|public||
claimInterval|uint|public||The interval for claiming the amount.
lastClaimed|uint|public||The timestamp of last claimed money.
amount2Claim|uint|public||The amount per intervall.
currentAmount|uint|public||The current amount of the contract.
-

#### PocketMoneyContract.PocketMoneyContract() public  



#### PocketMoneyContract.claimPocketMoney() public  onlyRecipient() 

Receives the money for the past intervals.



#### PocketMoneyContract.isInitalized() private  returns (bool )


name|type|direction|doc
----|----|----|----
|bool|return|

#### PocketMoneyContract.() public  payable 



#### event PocketMoneyClaimed

Signaled when the pocket money is claimed.


name|type|indexed|doc
----|----|----|----
_recipient|address||
time|uint||
amount|uint||
intervals|uint||
succsess|bool||

#### event PocketMoneyDonated

Signaled when pocked money is received.


name|type|indexed|doc
----|----|----|----
_donator|address||
time|uint||
amount|uint||


