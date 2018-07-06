package com.paigunna.api.repo;

import com.paigunna.api.domain.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author Arm
 */
public interface VehicleRepo extends JpaRepository<Vehicle, Long> ,JpaSpecificationExecutor<Vehicle> {
}
