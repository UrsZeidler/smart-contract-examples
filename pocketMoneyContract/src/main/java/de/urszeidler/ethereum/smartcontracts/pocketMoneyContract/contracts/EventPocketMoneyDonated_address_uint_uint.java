package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract.*;

/**
 * The Event Objects for the event PocketMoneyDonated(org.adridadou.ethereum.values.EthAddress _donator,java.math.BigInteger time,java.math.BigInteger amount).
 *
 */
public class EventPocketMoneyDonated_address_uint_uint{
	private org.adridadou.ethereum.values.EthAddress _donator;
	private java.math.BigInteger time;
	private java.math.BigInteger amount;

	public EventPocketMoneyDonated_address_uint_uint(org.adridadou.ethereum.values.EthAddress _donator,java.math.BigInteger time,java.math.BigInteger amount) {
		super();
		this._donator = _donator;
		this.time = time;
		this.amount = amount;
	}

	/**
	 * Getter for _donator.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress get_donator(){
		return _donator;
	}

	/**
	 * Getter for time.
	 * @return
	 */
	public java.math.BigInteger getTime(){
		return time;
	}

	/**
	 * Getter for amount.
	 * @return
	 */
	public java.math.BigInteger getAmount(){
		return amount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_donator == null) ? 0 : _donator.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + ((amount == null) ? 0 : amount.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EventPocketMoneyDonated_address_uint_uint other = (EventPocketMoneyDonated_address_uint_uint) obj;
		if (_donator == null) {
			if (other._donator != null)
				return false;
		} else if (!_donator.equals(other._donator))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		if (amount == null) {
			if (other.amount != null)
				return false;
		} else if (!amount.equals(other.amount))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventPocketMoneyDonated_address_uint_uint [_donator=" + _donator + ",time=" + time + ",amount=" + amount + "]";
	}
}
