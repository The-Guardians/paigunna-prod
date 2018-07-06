package com.paigunna.api.service.impl;

import com.paigunna.api.domain.Vehicle;
import com.paigunna.api.repo.VehicleRepo;
import com.paigunna.api.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Arm
 */
@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo vehicleRepo;

    @Override
    public List<Vehicle> getAll() {
        return vehicleRepo.findAll();
    }

    @Override
    public Vehicle getById(Long id) {
        return vehicleRepo.findById(id).orElse(null);
    }

    @Override
    public Vehicle save(Vehicle vehicle) {
        return vehicleRepo.save(vehicle);
    }

}
