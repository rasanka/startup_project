package com.ebees.web.rest.ws;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.ebees.web.core.entities.User;
import com.ebees.web.core.services.IUserService;
import com.ebees.web.core.services.exceptions.UserExistsException;
import com.ebees.web.core.services.util.UserList;
import com.ebees.web.rest.exceptions.ConflictException;
import com.ebees.web.rest.resources.UserListResource;
import com.ebees.web.rest.resources.UserResource;
import com.ebees.web.rest.resources.asm.UserListResourceAsm;
import com.ebees.web.rest.resources.asm.UserResourceAsm;

/**
 * Created by Rasanka on 2016-09-04.
 */
@Controller
@RequestMapping("/rest/users")
public class UserController {

	@Autowired
	private IUserService service;

	public UserController(IUserService service) {
		this.service = service;
	}

	@RequestMapping(method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<UserListResource> findAllUsers(
			@RequestParam(value = "email", required = false) String email,
			@RequestParam(value = "password", required = false) String password) {
		UserList list = null;
		if (email == null) {
			list = service.findAll();
		} else {
			User user = service.findByEmail(email);
			list = new UserList(new ArrayList<User>());
			if (user != null) {
				if (password != null) {
					if (user.getPassword().equals(password)) {
						list = new UserList(Arrays.asList(user));
					}
				} else {
					list = new UserList(Arrays.asList(user));
				}
			}
		}
		UserListResource res = new UserListResourceAsm().toResource(list);
		return new ResponseEntity<UserListResource>(res, HttpStatus.OK);
	}

	@RequestMapping(value = "/{userId}", method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<UserResource> getUser(
			@PathVariable Long userId) {

		User user = service.findUser(userId);

		if (user != null) {
			UserResource res = new UserResourceAsm().toResource(user);
			return new ResponseEntity<UserResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<UserResource>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(method = RequestMethod.POST)
	@PreAuthorize("permitAll")
	public ResponseEntity<UserResource> createUser(
			@RequestBody UserResource sentUser) {
		try {
			User createdUser = service.createUser(sentUser.toUser());
			UserResource res = new UserResourceAsm().toResource(createdUser);
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(URI.create(res.getLink("self").getHref()));
			return new ResponseEntity<UserResource>(res, headers, HttpStatus.CREATED);
		} catch (UserExistsException exception) {
			throw new ConflictException(exception);
		}
	}
}
