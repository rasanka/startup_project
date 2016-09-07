package com.ebees.web.core.services.util;

import java.util.List;

import com.ebees.web.core.entities.User;
import com.google.common.collect.Lists;

/**
 * Created by Rasanka on 2016-09-04.
 */
public class UserList {

    private List<User> users = Lists.newArrayList();

    public UserList(List<User> list) {
        this.users = list;
    }

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

}
