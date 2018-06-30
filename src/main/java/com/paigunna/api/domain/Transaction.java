package com.paigunna.api.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * @author Arm
 */
@Entity
@Table(name = "TRANSACTION")
public class Transaction implements Serializable {

    @Id
    @TableGenerator(
            name = "transaction",
            table = "sequence",
            pkColumnValue = "transaction",
            allocationSize = 1,
            initialValue = 0
    )
    @GeneratedValue(
            generator = "transaction",
            strategy = GenerationType.TABLE
    )
    private String id;

    @Column(name = "TIME_START")
    private LocalDate timeStart;
    @Column(name = "TIME_FINISH")
    private LocalDate timeFinish;
    @Column(name = "PRICE")
    private BigDecimal price;
    @Column(name = "DISTANCE")
    private Double distance;

    @Column(name = "START_PLACE_NAME")
    private String startPlaceName;
    @Column(name = "START_LAT")
    private Double startLat;
    @Column(name = "START_LNG")
    private Double startLng;

    @Column(name = "DESTINATION_NAME")
    private String destinationName;
    @Column(name = "DESTINATION_LAT")
    private Double destinationLat;
    @Column(name = "DESTINATION_LNG")
    private Double destinationLng;

    @Column(name = "OMISE_TOKEN")
    private String omiseToken;

    @Column(name = "PROVIDER")
    private Long providerId;

    @ManyToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JoinColumn(name = "PROVIDER", referencedColumnName = "id", insertable = false, updatable = false)
    private User provider;

    @Column(name = "PASSENGER")
    private Long passengerId;

    @ManyToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JoinColumn(name = "PASSENGER", referencedColumnName = "id", insertable = false, updatable = false)
    private User passenger;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(LocalDate timeStart) {
        this.timeStart = timeStart;
    }

    public LocalDate getTimeFinish() {
        return timeFinish;
    }

    public void setTimeFinish(LocalDate timeFinish) {
        this.timeFinish = timeFinish;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Long getProviderId() {
        return providerId;
    }

    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Double getStartLat() {
        return startLat;
    }

    public void setStartLat(Double startLat) {
        this.startLat = startLat;
    }

    public Double getStartLng() {
        return startLng;
    }

    public void setStartLng(Double startLng) {
        this.startLng = startLng;
    }

    public String getDestinationName() {
        return destinationName;
    }

    public void setDestinationName(String destinationName) {
        this.destinationName = destinationName;
    }

    public Double getDestinationLat() {
        return destinationLat;
    }

    public void setDestinationLat(Double destinationLat) {
        this.destinationLat = destinationLat;
    }

    public Double getDestinationLng() {
        return destinationLng;
    }

    public void setDestinationLng(Double destinationLng) {
        this.destinationLng = destinationLng;
    }

    public User getProvider() {
        return provider;
    }

    public void setProvider(User provider) {
        this.provider = provider;
    }

    public User getPassenger() {
        return passenger;
    }

    public void setPassenger(User passenger) {
        this.passenger = passenger;
    }

    public String getStartPlaceName() {
        return startPlaceName;
    }

    public void setStartPlaceName(String startPlaceName) {
        this.startPlaceName = startPlaceName;
    }

    public String getOmiseToken() {
        return omiseToken;
    }

    public void setOmiseToken(String omiseToken) {
        this.omiseToken = omiseToken;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Transaction that = (Transaction) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
