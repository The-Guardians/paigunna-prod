package com.paigunna.api.resource;

import com.paigunna.api.domain.User;
import com.paigunna.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/user")
public class UserResource {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable("id") Long id) {
        return userService.getById(id);
    }

    @GetMapping("/service")
    public List<User> getServiceUser() {
        return null;
    }

    @PostMapping
    public User save(@RequestBody User user) {
        return userService.save(user);
    }

    @PostMapping("/update/pos/{id}")
    public User updatePos(@RequestBody User user) {
        return null;
    }
}
