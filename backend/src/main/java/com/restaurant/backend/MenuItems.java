package com.restaurant.backend;
import jakarta.persistence.*;// we need this import for @Entity, @Table and more

@Entity//tells spring that this is a database
@Table(name = "menu_items")
public class MenuItems {//this maps the table to java

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int id;// encapsulation requires variables to be made private 
    private String name;
    private String description;
    private double price;

    public MenuItems() {// We need to make an empty constructor 
    }

    public MenuItems(String n, String d, double p) {
        name = n;
        description = d;
        price = p;
    }

    public int getId() {//each variable requires a getter and setter method due to encapsulation
        return id;
    }

    public void setId(int i) {
        id = i;
    }

    public String getName() {
        return name;
    }

    public void setName(String n) {
        name = n;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String d) {
        description = d;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double p) {
        price = p;
    }
}