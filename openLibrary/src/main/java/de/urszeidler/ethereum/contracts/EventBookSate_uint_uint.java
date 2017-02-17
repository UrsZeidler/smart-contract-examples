package de.urszeidler.ethereum.contracts;

import de.urszeidler.ethereum.contracts.Library.*;

/**
 * The Event Objects for the event BookSate(Integer id,Integer _state).
 *
 */
public class EventBookSate_uint_uint{
	private Integer id;
	private Integer _state;

	public EventBookSate_uint_uint(Integer id,Integer _state) {
		super();
		this.id = id;
		this._state = _state;
	}

	/**
	 * Getter for id.
	 * @return
	 */
	public Integer getId(){
		return id;
	}

	/**
	 * Getter for _state.
	 * @return
	 */
	public Integer get_state(){
		return _state;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((_state == null) ? 0 : _state.hashCode());
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
		EventBookSate_uint_uint other = (EventBookSate_uint_uint) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (_state == null) {
			if (other._state != null)
				return false;
		} else if (!_state.equals(other._state))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventBookSate_uint_uint [id=" + id + ",_state=" + _state + "]";
	}
}
