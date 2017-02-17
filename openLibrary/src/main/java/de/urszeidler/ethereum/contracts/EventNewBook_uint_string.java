package de.urszeidler.ethereum.contracts;

import de.urszeidler.ethereum.contracts.Library.*;

/**
 * The Event Objects for the event NewBook(Integer id,String titel).
 *
 */
public class EventNewBook_uint_string{
	private Integer id;
	private String titel;

	public EventNewBook_uint_string(Integer id,String titel) {
		super();
		this.id = id;
		this.titel = titel;
	}

	/**
	 * Getter for id.
	 * @return
	 */
	public Integer getId(){
		return id;
	}

	/**
	 * Getter for titel.
	 * @return
	 */
	public String getTitel(){
		return titel;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((titel == null) ? 0 : titel.hashCode());
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
		EventNewBook_uint_string other = (EventNewBook_uint_string) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (titel == null) {
			if (other.titel != null)
				return false;
		} else if (!titel.equals(other.titel))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventNewBook_uint_string [id=" + id + ",titel=" + titel + "]";
	}
}
