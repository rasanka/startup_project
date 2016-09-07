package com.ebees.web.core.services;

import com.ebees.web.core.entities.User;
import com.ebees.web.core.services.util.UserList;

/**
 * Created by Rasanka on 2016-09-04.
 */
public interface IUserService {

	public User findUser(Long id);

	public User createUser(User data);

	public User findByEmail(String email);
	
	public UserList findAll();
}
