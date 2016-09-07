package com.ebees.web.core.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ebees.web.core.dao.IUserDao;
import com.ebees.web.core.entities.User;
import com.ebees.web.core.services.IUserService;
import com.ebees.web.core.services.exceptions.UserExistsException;
import com.ebees.web.core.services.util.UserList;

/**
 * Created by Rasanka on 2016-09-04.
 */
@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserDao dao;

	@Override
	public User findUser(Long id) {
		return dao.findUser(id);
	}

	@Override
	public User createUser(User data) {
		User account = dao.findByEmail(data.getEmail());
		if (account != null) {
			throw new UserExistsException();
		}
		return dao.createUser(data);
	}

	@Override
	public User findByEmail(String email) {
		return dao.findByEmail(email);
	}

	@Override
	public UserList findAll() {
		return new UserList(dao.findAll());
	}

}
