package com.ebees.web.core.security;

import com.ebees.web.core.entities.User;
import com.ebees.web.core.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * Created by Rasanka on 9/9/2016.
 */
@Component
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private IUserService service;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User account = service.findByEmail(email);
        if(account == null) {
            throw new UsernameNotFoundException("no user found with " + email);
        }
        return new AccountUserDetails(account);
    }
}
