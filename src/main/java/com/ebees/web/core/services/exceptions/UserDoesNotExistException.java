package com.ebees.web.core.services.exceptions;

/**
 * Created by Rasanka on 2016-09-04.
 */
public class UserDoesNotExistException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserDoesNotExistException(Throwable cause) {
        super(cause);
    }

    public UserDoesNotExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserDoesNotExistException(String message) {
        super(message);
    }

    public UserDoesNotExistException() {
    }
}
