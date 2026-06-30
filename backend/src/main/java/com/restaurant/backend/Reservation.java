package com.restaurant.backend;
import jakarta.persistence.*;// we need this import for @Entity, @Table and more
import java.time.LocalDate;// we need this for the reservation date

@Entity//tells spring that this is a database
@Table(name = "reservations")
public class Reservation {//this maps the table to java

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int id;// encapsulation requires variables to be made private 
    private String email;
    private String time;
    private int partySize;
    private LocalDate date;

    public Reservation() {// We need to make an empty constructor 
    }

    public Reservation(String e, String t, int p, String d) {
        email = e;
        time = t;
        partySize = p;
        date = d;
    }
    
    public int getId() {//each variable requires a getter and setter method due to encapsulation
        return id;
    }

    public void setId(int i) {
        id = i;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String e) {
        email = e;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String t) {
        time = t;
    }

    public String getPartySize() {
        return partySize;
    }

    public void setPartySize(int p) {
        partySize = p;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate d) {
        date = d;
    }
}