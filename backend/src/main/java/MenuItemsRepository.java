import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository //allows us to access and edit the table without writting SQL Queries
        extends JpaRepository<MenuItem, Integer> {
}