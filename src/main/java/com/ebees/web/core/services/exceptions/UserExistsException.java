package com.ebees.web.core.services.exceptions;

/**
 * Created by Rasanka on 2016-09-03.
 */
public class UserExistsException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserExistsException(String message) {
        super(message);
    }

    public UserExistsException() {
        super();
    }
}
