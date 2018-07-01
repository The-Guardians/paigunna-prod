package com.paigunna.api.service;

import com.paigunna.api.domain.Vehicle;

import java.util.List;

/**
 * @author Arm
 */
public interface VehicleService {

    Vehicle save(Vehicle vehicle);

    Vehicle getById(Long id);

    List<Vehicle> getAll();
}
