package com.restaurant.backend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository //allows us to access and edit the table without writting SQL Queries
        extends JpaRepository<Reservation, Integer> {
}