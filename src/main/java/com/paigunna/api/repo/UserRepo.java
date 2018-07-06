package com.paigunna.api.repo;

import com.paigunna.api.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author Arm
 */
public interface UserRepo extends JpaRepository<User, Long> ,JpaSpecificationExecutor<User> {

    User findById(String id);
}
