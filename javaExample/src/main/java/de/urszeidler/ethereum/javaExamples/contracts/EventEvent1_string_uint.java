package de.urszeidler.ethereum.javaExamples.contracts;

import de.urszeidler.ethereum.javaExamples.contracts.JavaEventExample.*;

/**
 * The Event Objects for the event Event1(String text,Integer index).
 *
 */
public class EventEvent1_string_uint{
	private String text;
	private Integer index;

	public EventEvent1_string_uint(String text,Integer index) {
		super();
		this.text = text;
		this.index = index;
	}

	/**
	 * Getter for text.
	 * @return
	 */
	public String getText(){
		return text;
	}

	/**
	 * Getter for index.
	 * @return
	 */
	public Integer getIndex(){
		return index;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((text == null) ? 0 : text.hashCode());
		result = prime * result + ((index == null) ? 0 : index.hashCode());
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
		EventEvent1_string_uint other = (EventEvent1_string_uint) obj;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
			return false;
		if (index == null) {
			if (other.index != null)
				return false;
		} else if (!index.equals(other.index))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventEvent1_string_uint [text=" + text + ",index=" + index + "]";
	}
}
