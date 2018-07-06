package com.paigunna.api.resource;

import com.paigunna.api.domain.Vehicle;
import com.paigunna.api.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/vehicle")
public class VehicleResource {


    @Autowired
    private VehicleService vehicleService;

    @GetMapping
    public List<Vehicle> getAll(){
        return vehicleService.getAll();
    }

    @GetMapping("/{id}")
    public Vehicle getById(@PathVariable("id") Long id){
        return vehicleService.getById(id);
    }

    @PostMapping
    public Vehicle save(Vehicle vehicle){
        return vehicleService.save(vehicle);
    }

}
