package com.ebees.web.core.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.ebees.web.core.dao.IUserDao;
import com.ebees.web.core.entities.User;

/**
 * Created by Rasanka on 2016-09-04.
 */
@Repository
public class UserDaoImpl implements IUserDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	public User findUser(Long id) {
		return em.find(User.class, id);
	}

	@Override
	public User createUser(User data) {
		em.persist(data);
		return data;
	}

	@SuppressWarnings("unchecked")
	@Override
	public User findByEmail(String email) {
		Query query = em.createQuery("SELECT a FROM User a WHERE a.email=?1");
		query.setParameter(1, email);
		List<User> accounts = query.getResultList();
		if (accounts.size() == 0) {
			return null;
		} else {
			return accounts.get(0);
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> findAll() {
		Query query = em.createQuery("SELECT a FROM User a");
		return query.getResultList();
	}

}
