package com.paigunna.api.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * @author Arm
 */
@Entity
@Table(name = "VEHICLE")
public class Vehicle implements Serializable {

    @Id
    @TableGenerator(
            name = "vehicle",
            table = "sequence",
            pkColumnValue = "vehicle",
            allocationSize = 1,
            initialValue = 0
    )
    @GeneratedValue(
            generator = "vehicle",
            strategy = GenerationType.TABLE
    )
    private Long id;

    @Column(name = "LICENSE")
    private String license;
    @Column(name = "PROVINCE")
    private String province;
    @Column(name = "BRAND")
    private String brand;

    @OneToOne
    @JoinColumn(name = "OWNER" , referencedColumnName = "id" ,insertable = false, updatable = false)
    private User owner;

    @OneToOne
    @JoinColumn(name = "VEHICLE_TYPE" ,referencedColumnName = "id",insertable = false, updatable = false)
    private VehicleType vehicleType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public VehicleType getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(VehicleType vehicleType) {
        this.vehicleType = vehicleType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vehicle vehicle = (Vehicle) o;
        return Objects.equals(id, vehicle.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
