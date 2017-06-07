package de.urszeidler.ethereum.javaExamples.contracts;

import de.urszeidler.ethereum.javaExamples.contracts.ContractExample.*;

/**
 * The return value for the function contractData().
 *
 * see {@link ContractExample#contractData()}
 */
public class ReturnContractData_string_address_uint_bool{
	private String _text;
	private org.adridadou.ethereum.propeller.values.EthAddress _owner;
	private Integer _number;
	private Boolean _locked;

	public ReturnContractData_string_address_uint_bool(String _text,org.adridadou.ethereum.propeller.values.EthAddress _owner,Integer _number,Boolean _locked) {
		super();
		this._text = _text;
		this._owner = _owner;
		this._number = _number;
		this._locked = _locked;
	}

	/**
	 * Getter for _text.
	 * @return
	 */
	public String get_text(){
		return _text;
	}

	/**
	 * Getter for _owner.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress get_owner(){
		return _owner;
	}

	/**
	 * Getter for _number.
	 * @return
	 */
	public Integer get_number(){
		return _number;
	}

	/**
	 * Getter for _locked.
	 * @return
	 */
	public Boolean get_locked(){
		return _locked;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_text == null) ? 0 : _text.hashCode());
		result = prime * result + ((_owner == null) ? 0 : _owner.hashCode());
		result = prime * result + ((_number == null) ? 0 : _number.hashCode());
		result = prime * result + ((_locked == null) ? 0 : _locked.hashCode());
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
		ReturnContractData_string_address_uint_bool other = (ReturnContractData_string_address_uint_bool) obj;
		if (_text == null) {
			if (other._text != null)
				return false;
		} else if (!_text.equals(other._text))
			return false;
		if (_owner == null) {
			if (other._owner != null)
				return false;
		} else if (!_owner.equals(other._owner))
			return false;
		if (_number == null) {
			if (other._number != null)
				return false;
		} else if (!_number.equals(other._number))
			return false;
		if (_locked == null) {
			if (other._locked != null)
				return false;
		} else if (!_locked.equals(other._locked))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ReturnContractData_string_address_uint_bool [_text=" + _text + ",_owner=" + _owner + ",_number=" + _number + ",_locked=" + _locked + "]";
	}
}
