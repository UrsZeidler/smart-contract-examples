package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract.*;

/**
 * The Event Objects for the event PocketMoneyClaimed(org.adridadou.ethereum.propeller.values.EthAddress _recipient,java.math.BigInteger time,java.math.BigInteger amount,java.math.BigInteger intervals,Boolean succsess).
 *
 */
public class EventPocketMoneyClaimed_address_uint_uint_uint_bool{
	private org.adridadou.ethereum.propeller.values.EthAddress _recipient;
	private java.math.BigInteger time;
	private java.math.BigInteger amount;
	private java.math.BigInteger intervals;
	private Boolean succsess;

	public EventPocketMoneyClaimed_address_uint_uint_uint_bool(org.adridadou.ethereum.propeller.values.EthAddress _recipient,java.math.BigInteger time,java.math.BigInteger amount,java.math.BigInteger intervals,Boolean succsess) {
		super();
		this._recipient = _recipient;
		this.time = time;
		this.amount = amount;
		this.intervals = intervals;
		this.succsess = succsess;
	}

	/**
	 * Getter for _recipient.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress get_recipient(){
		return _recipient;
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

	/**
	 * Getter for intervals.
	 * @return
	 */
	public java.math.BigInteger getIntervals(){
		return intervals;
	}

	/**
	 * Getter for succsess.
	 * @return
	 */
	public Boolean getSuccsess(){
		return succsess;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_recipient == null) ? 0 : _recipient.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + ((amount == null) ? 0 : amount.hashCode());
		result = prime * result + ((intervals == null) ? 0 : intervals.hashCode());
		result = prime * result + ((succsess == null) ? 0 : succsess.hashCode());
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
		EventPocketMoneyClaimed_address_uint_uint_uint_bool other = (EventPocketMoneyClaimed_address_uint_uint_uint_bool) obj;
		if (_recipient == null) {
			if (other._recipient != null)
				return false;
		} else if (!_recipient.equals(other._recipient))
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
		if (intervals == null) {
			if (other.intervals != null)
				return false;
		} else if (!intervals.equals(other.intervals))
			return false;
		if (succsess == null) {
			if (other.succsess != null)
				return false;
		} else if (!succsess.equals(other.succsess))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventPocketMoneyClaimed_address_uint_uint_uint_bool [_recipient=" + _recipient + ",time=" + time + ",amount=" + amount + ",intervals=" + intervals + ",succsess=" + succsess + "]";
	}
}
