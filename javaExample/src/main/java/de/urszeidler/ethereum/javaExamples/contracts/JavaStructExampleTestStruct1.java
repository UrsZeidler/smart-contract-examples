package de.urszeidler.ethereum.javaExamples.contracts;

import de.urszeidler.ethereum.javaExamples.contracts.JavaStructExample.*;

/**
 * The dataholder for the struct JavaStructExampleTestStruct1.
 *
 */
public class JavaStructExampleTestStruct1{
	private String text;
	private Integer time;
	private org.adridadou.ethereum.propeller.values.EthAddress sender;

	public JavaStructExampleTestStruct1(String text,Integer time,org.adridadou.ethereum.propeller.values.EthAddress sender) {
		super();
		this.text = text;
		this.time = time;
		this.sender = sender;
	}

	/**
	 * Getter for text.
	 * @return
	 */
	public String getText(){
		return text;
	}

	/**
	 * Getter for time.
	 * @return
	 */
	public Integer getTime(){
		return time;
	}

	/**
	 * Getter for sender.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getSender(){
		return sender;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((text == null) ? 0 : text.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + ((sender == null) ? 0 : sender.hashCode());
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
		JavaStructExampleTestStruct1 other = (JavaStructExampleTestStruct1) obj;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		if (sender == null) {
			if (other.sender != null)
				return false;
		} else if (!sender.equals(other.sender))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "JavaStructExampleTestStruct1 [text=" + text + ",time=" + time + ",sender=" + sender + "]";
	}
}
