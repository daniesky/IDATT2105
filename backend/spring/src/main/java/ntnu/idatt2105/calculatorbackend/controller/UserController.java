package ntnu.idatt2105.calculatorbackend.controller;


import ntnu.idatt2105.calculatorbackend.model.User;
import ntnu.idatt2105.calculatorbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/user")
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path ="/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        List<User> u = userRepository.findByUsernameAndPassword(username, password);
        if(u.size() == 1 && u.get(0) != null){
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }
    }
    @PostMapping(path ="/newuser")
    public ResponseEntity<String> newUser(@RequestParam String username, @RequestParam String password){
        if(userRepository.existsByUsername(username)){
            return new ResponseEntity<>("Username is already taken", HttpStatus.CONFLICT);
        }
        else{
            User n = new User();
            n.setUsername(username);
            n.setPassword(password);
            userRepository.save(n);
            return new ResponseEntity<>("User has been created", HttpStatus.OK);
        }
    }
}
