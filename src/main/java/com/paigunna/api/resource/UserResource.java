package com.paigunna.api.resource;

import com.paigunna.api.domain.User;
import com.paigunna.api.repo.UserRepo;
import com.paigunna.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/user")
public class UserResource {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAll(){
        return userRepo.findAll();
    }
}
