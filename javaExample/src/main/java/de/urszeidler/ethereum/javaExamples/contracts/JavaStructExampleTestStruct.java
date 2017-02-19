package de.urszeidler.ethereum.javaExamples.contracts;

import de.urszeidler.ethereum.javaExamples.contracts.JavaStructExample.*;

/**
 * The dataholder for the struct JavaStructExampleTestStruct.
 *
 */
public class JavaStructExampleTestStruct{
	private Integer attribute1;
	private String attribute2;

	public JavaStructExampleTestStruct(Integer attribute1,String attribute2) {
		super();
		this.attribute1 = attribute1;
		this.attribute2 = attribute2;
	}

	/**
	 * Getter for attribute1.
	 * @return
	 */
	public Integer getAttribute1(){
		return attribute1;
	}

	/**
	 * Getter for attribute2.
	 * @return
	 */
	public String getAttribute2(){
		return attribute2;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((attribute1 == null) ? 0 : attribute1.hashCode());
		result = prime * result + ((attribute2 == null) ? 0 : attribute2.hashCode());
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
		JavaStructExampleTestStruct other = (JavaStructExampleTestStruct) obj;
		if (attribute1 == null) {
			if (other.attribute1 != null)
				return false;
		} else if (!attribute1.equals(other.attribute1))
			return false;
		if (attribute2 == null) {
			if (other.attribute2 != null)
				return false;
		} else if (!attribute2.equals(other.attribute2))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "JavaStructExampleTestStruct [attribute1=" + attribute1 + ",attribute2=" + attribute2 + "]";
	}
}
