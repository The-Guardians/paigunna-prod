package com.paigunna.api.resource;

import com.paigunna.api.repo.VehicleTypeRepo;
import com.paigunna.api.service.VehicleTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/vehicle_type")
public class VehicleTypeResource {

    @Autowired
    private VehicleTypeRepo vehicleTypeRepo;

    @Autowired
    private VehicleTypeService vehicleTypeService;
}
