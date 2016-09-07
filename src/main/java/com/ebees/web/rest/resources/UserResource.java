package com.ebees.web.rest.resources;

import org.springframework.hateoas.ResourceSupport;

import com.ebees.web.core.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Rasanka on 2016-09-04.
 */
public class UserResource extends ResourceSupport {
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String password;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@JsonIgnore
	public String getPassword() {
		return password;
	}

	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}

	public User toUser() {
		User account = new User();
		account.setFirstName(firstName);
		account.setLastName(lastName);
		account.setGender(gender);
		account.setEmail(email);
		account.setPassword(password);
		return account;
	}
}
