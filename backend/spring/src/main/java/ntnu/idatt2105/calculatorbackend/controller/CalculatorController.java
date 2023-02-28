package ntnu.idatt2105.calculatorbackend.controller;

import ntnu.idatt2105.calculatorbackend.model.Equation;
import ntnu.idatt2105.calculatorbackend.service.EquationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
public class CalculatorController {

    @Autowired
    EquationService service;

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/calculate")
    public double calculate(@RequestBody Equation eq){
        System.out.println(eq.getEq());
        return service.solve(eq);
    }

}
