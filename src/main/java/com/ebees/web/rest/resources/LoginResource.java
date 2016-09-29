package com.ebees.web.rest.resources;

import org.springframework.hateoas.ResourceSupport;

public class LoginResource extends ResourceSupport {

	private boolean isLoggedIn;

	public boolean isLoggedIn() {
		return isLoggedIn;
	}

	public void setLoggedIn(boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}

}
