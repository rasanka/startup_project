package com.ebees.web.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.ebees.web.rest.resources.LoginResource;
import com.ebees.web.rest.ws.UserController;

public class LoginResourceAsm extends ResourceAssemblerSupport<Boolean, LoginResource> {

	public LoginResourceAsm() {
		super(UserController.class, LoginResource.class);
	}

	@Override
	public LoginResource toResource(Boolean arg0) {
		LoginResource res = new LoginResource();
		res.setLoggedIn(arg0);
		return res;
	}

}
