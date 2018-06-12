package com.paigunna.api.service;

import com.paigunna.api.domain.User;
import com.paigunna.api.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Arm
 */
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User save(User user) {
        return userRepo.save(user);
    }
}
