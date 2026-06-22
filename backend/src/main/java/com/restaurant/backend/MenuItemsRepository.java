package com.restaurant.backend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemsRepository //allows us to access and edit the table without writting SQL Queries
        extends JpaRepository<MenuItems, Integer> {
}