package de.urszeidler.ethereum.contracts;

/**
 * The return value for the function getBook(Integer _id).
 *
 * see {@link Library#getBook( Integer)}
 */
public class ReturnGetBook_string_uint{
	private String name;
	private Integer state;

	public ReturnGetBook_string_uint(String name,Integer state) {
		super();
		this.name = name;
		this.state = state;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public String getName(){
		return name;
	}

	/**
	 * Getter for state.
	 * @return
	 */
	public Integer getState(){
		return state;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
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
		ReturnGetBook_string_uint other = (ReturnGetBook_string_uint) obj;
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
		return true;
	}

	@Override
	public String toString() {
		return "ReturnGetBook_string_uint [name=" + name + ",state=" + state + "]";
	}
}
