package de.urszeidler.ethereum.javaExamples.contracts;

import de.urszeidler.ethereum.javaExamples.contracts.ContractExample.*;

/**
 * The return value for the function returnStateChange().
 *
 * see {@link ContractExample#returnStateChange()}
 */
public class ReturnReturnStateChange_address_uint{
	private org.adridadou.ethereum.values.EthAddress _creator;
	private Integer _time;

	public ReturnReturnStateChange_address_uint(org.adridadou.ethereum.values.EthAddress _creator,Integer _time) {
		super();
		this._creator = _creator;
		this._time = _time;
	}

	/**
	 * Getter for _creator.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress get_creator(){
		return _creator;
	}

	/**
	 * Getter for _time.
	 * @return
	 */
	public Integer get_time(){
		return _time;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_creator == null) ? 0 : _creator.hashCode());
		result = prime * result + ((_time == null) ? 0 : _time.hashCode());
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
		ReturnReturnStateChange_address_uint other = (ReturnReturnStateChange_address_uint) obj;
		if (_creator == null) {
			if (other._creator != null)
				return false;
		} else if (!_creator.equals(other._creator))
			return false;
		if (_time == null) {
			if (other._time != null)
				return false;
		} else if (!_time.equals(other._time))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ReturnReturnStateChange_address_uint [_creator=" + _creator + ",_time=" + _time + "]";
	}
}
