package com.ebees.web.rest.resources.asm;

import java.util.List;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.ebees.web.core.services.util.UserList;
import com.ebees.web.rest.resources.UserListResource;
import com.ebees.web.rest.resources.UserResource;
import com.ebees.web.rest.ws.UserController;

/**
 * Created by Rasanka on 2016-09-04.
 */
public class UserListResourceAsm extends ResourceAssemblerSupport<UserList, UserListResource> {

	public UserListResourceAsm() {
		super(UserController.class, UserListResource.class);
	}

	@Override
	public UserListResource toResource(UserList userList) {
		List<UserResource> resList = new UserResourceAsm().toResources(userList.getUsers());
		UserListResource finalRes = new UserListResource();
		finalRes.setUserList(resList);
		return finalRes;
	}
}
