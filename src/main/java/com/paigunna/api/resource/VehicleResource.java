package com.paigunna.api.resource;

import com.paigunna.api.domain.Vehicle;
import com.paigunna.api.repo.VehicleRepo;
import com.paigunna.api.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/vehicle")
public class VehicleResource {

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private VehicleService vehicleService;
}
