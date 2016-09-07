package com.ebees.web.core.dao;

import java.util.List;

import com.ebees.web.core.entities.User;

/**
 * Created by Rasanka on 2016-09-04.
 */
public interface IUserDao {

	public User findUser(Long id);

	public User createUser(User data);

	public User findByEmail(String email);

	public List<User> findAll();
}
