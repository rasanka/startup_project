package com.ebees.test.dao;

import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.ebees.web.core.dao.IUserDao;
import com.ebees.web.core.entities.User;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/business-config.xml")
public class UserDaoTest {
	
	@Autowired
	private IUserDao dao;
	
	private User user;
	
	@Before
	@Transactional
	@Rollback(false)
	public void setup() {
		user = new User();
		user.setEmail("rasa@test.com");
		user.setFirstName("Rasa");
		user.setLastName("Jay");
		user.setGender("M");
		user.setPassword("password");
		
		dao.createUser(user);
	}

	@Test
	@Transactional
	public void testFind() {
		assertNotNull(dao.findUser(user.getId())); 
	}
}
