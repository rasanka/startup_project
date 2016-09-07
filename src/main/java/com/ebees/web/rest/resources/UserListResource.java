package com.ebees.web.rest.resources;

import java.util.List;

import org.springframework.hateoas.ResourceSupport;

import com.google.common.collect.Lists;

/**
 * Created by Rasanka on 2016-09-04.
 */
public class UserListResource extends ResourceSupport {
	private List<UserResource> userList = Lists.newArrayList();

	public List<UserResource> getUserList() {
		return userList;
	}

	public void setUserList(List<UserResource> userList) {
		this.userList = userList;
	}
}
