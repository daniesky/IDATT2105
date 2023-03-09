package ntnu.idatt2105.calculatorbackend.repository;

import ntnu.idatt2105.calculatorbackend.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void tearDown(){
        userRepository.deleteAll();
    }

    @Test
    public void createAndFind() {
        User u = new User();
        u.setUsername("daniesky");
        u.setPassword("123");
        userRepository.save(u);
        List<User> found = userRepository.findByUsername("daniesky");
        System.out.println(found.get(0).getUsername());
        Assert.assertEquals(u, found.get(0));
    }
}
