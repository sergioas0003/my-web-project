package com.restaurant.backend;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController// This deals with HTTP requests
@RequestMapping("/api/menu") 
public class MenuItemsController {

    private final MenuItemsRepository repository;

    public MenuItemsController(MenuItemsRepository r) {
        repository = r;
    }

    @GetMapping
    public List<MenuItems> getAllMenuItems() {
        return repository.findAll();
    }
}