package com.ebees.test.ws;

import static org.hamcrest.Matchers.endsWith;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.ebees.web.core.entities.User;
import com.ebees.web.core.services.IUserService;
import com.ebees.web.core.services.exceptions.UserExistsException;
import com.ebees.web.rest.ws.UserController;

public class UserControllerTest {

	@InjectMocks
	private UserController controller;

	@Mock
	private IUserService service;

	private ArgumentCaptor<User> userCaptor;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(controller).build();

		userCaptor = ArgumentCaptor.forClass(User.class);
	}

	@Test
	public void createAccountNonExistingUser() throws Exception {
		User createdUser = new User();
		createdUser.setId(1L);
		createdUser.setFirstName("Rasa");
		createdUser.setLastName("Jay");
		createdUser.setGender("M");
		createdUser.setEmail("rasanka2006@gmail.com");
		createdUser.setPassword("p@ssword");

		when(service.createUser(any(User.class))).thenReturn(createdUser);

		mockMvc.perform(post("/rest/users")
			.content("{\"firstName\":\"Rasa\",\"lastName\":\"Jay\",\"gender\":\"M\""
					+ ",\"email\":\"rasanka2006@gmail.com\",\"password\":\"p@ssword\"}")
			.contentType(MediaType.APPLICATION_JSON))
        .andExpect(header().string("Location", endsWith("/rest/users/1")))
        .andExpect(jsonPath("$.firstName", is(createdUser.getFirstName())))
        .andExpect(status().isCreated());
		
		org.mockito.Mockito.verify(service).createUser(userCaptor.capture());
		
		String password = userCaptor.getValue().getPassword();
		assertEquals(createdUser.getPassword(), password);

	}
	
	@SuppressWarnings("unchecked")
	@Test
	public void createAccountExistingUser() throws Exception {

		when(service.createUser(any(User.class))).thenThrow(UserExistsException.class);

		mockMvc.perform(post("/rest/users")
			.content("{\"firstName\":\"Rasa\",\"lastName\":\"Jay\",\"gender\":\"M\""
					+ ",\"email\":\"rasanka2006@gmail.com\",\"password\":\"p@ssword\"}")
			.contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isConflict());
	}

	@Test
	public void getExistingUser() throws Exception {
		User user = new User();
		user.setId(1L);
		user.setFirstName("Rasa");
		user.setLastName("Jay");
		user.setGender("M");
		user.setEmail("rasanka2006@gmail.com");
		user.setPassword("p@ssword");

		when(service.findUser(1L)).thenReturn(user);

		mockMvc.perform(get("/rest/users/1")).andDo(print()).andExpect(jsonPath("$.firstName", is(user.getFirstName())))
				// .andExpect(jsonPath("$.password", is(nullValue())))
				.andExpect(jsonPath("$.links[*].href", hasItem(endsWith("/users/1")))).andExpect(status().isOk());

	}

	@Test
	public void getNonExistingUser() throws Exception {

		when(service.findUser(1L)).thenReturn(null);

		mockMvc.perform(get("/rest/users/1")).andDo(print()).andExpect(status().isNotFound());

	}

}
