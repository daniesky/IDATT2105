package ntnu.idatt2105.calculatorbackend.repository;

import ntnu.idatt2105.calculatorbackend.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


public interface UserRepository extends CrudRepository<User,Integer> {
    Optional<User> findById(Integer id);
    List<User> findByUsername(String username);
    List<User> findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}
