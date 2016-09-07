package com.ebees.web.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.ebees.web.core.entities.User;
import com.ebees.web.rest.resources.UserResource;
import com.ebees.web.rest.ws.UserController;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.hateoas.Link;

/**
 * Created by Rasanka on 2016-09-04.
 */
public class UserResourceAsm extends ResourceAssemblerSupport<User, UserResource> {

	public UserResourceAsm() {
		super(UserController.class, UserResource.class);
	}

	@Override
	public UserResource toResource(User user) {
		UserResource res = new UserResource();
		res.setFirstName(user.getFirstName());
		res.setLastName(user.getLastName());
		res.setGender(user.getGender());
		res.setEmail(user.getEmail());
		res.setPassword(user.getPassword());

		Link link = linkTo(methodOn(UserController.class).getUser(user.getId())).withSelfRel();
		res.add(link);
		return res;
	}
}
