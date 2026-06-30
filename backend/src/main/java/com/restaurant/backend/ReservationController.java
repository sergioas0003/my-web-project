package com.restaurant.backend;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")//CORS needed for not blocking front-end fetch
@RestController// This deals with HTTP requests
@RequestMapping("/api/reservations") 
public class ReservationController {

    private final ReservationRepository repository;

    public ReservationController(ReservationRepository r) {
        repository = r;
    }

    @PostMapping
    public MenuItems AddReservation(@RequestBody Reservation item){
       return repository.save(item);//equivalent to INSERT in SQL
    }

    @GetMapping
    public List<Reservation> getAllReservations() {
        return repository.findAll();//retrieves data
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Integer id) {
        repository.deleteById(id);//deletes row in tbl that matches id
        
    }
}