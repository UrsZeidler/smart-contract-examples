package de.urszeidler.ethereum.contracts;

import de.urszeidler.ethereum.contracts.Library.Bookstate;

/**
 * The return value for the function getBook(  Integer _id).
 *
 * see {@link Library#getBook(   Integer)}
 */
public class ReturnGetBook_string_uint_address{
	private   String name;
	private   Bookstate state;
	private   String currentOwner;

	public ReturnGetBook_string_uint_address(  String name,  Bookstate state,  String currentOwner) {
		super();
		this.name = name;
		this.state = state;
		this.currentOwner = currentOwner;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public   String getName(){
		return name;
	}

	/**
	 * Getter for state.
	 * @return
	 */
	public   Bookstate getState(){
		return state;
	}

	/**
	 * Getter for currentOwner.
	 * @return
	 */
	public   String getCurrentOwner(){
		return currentOwner;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		result = prime * result + ((currentOwner == null) ? 0 : currentOwner.hashCode());
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
		ReturnGetBook_string_uint_address other = (ReturnGetBook_string_uint_address) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		if (currentOwner == null) {
			if (other.currentOwner != null)
				return false;
		} else if (!currentOwner.equals(other.currentOwner))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ReturnGetBook_string_uint_address [name=" + name + ",state=" + state + ",currentOwner=" + currentOwner + "]";
	}
}
