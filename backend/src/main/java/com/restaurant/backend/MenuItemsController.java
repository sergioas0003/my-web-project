package com.restaurant.backend;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")//CORS needed for not blocking front-end fetch
@RestController// This deals with HTTP requests
@RequestMapping("/api/menu") 
public class MenuItemsController {

    private final MenuItemsRepository repository;

    public MenuItemsController(MenuItemsRepository r) {
        repository = r;
    }

    @PostMapping
    public MenuItems AddItem(@RequestBody MenuItems item){
       return repository.save(item);//equivalent to INSERT in SQL
    }

    @GetMapping
    public List<MenuItems> getAllMenuItems() {
        return repository.findAll();
    }
}