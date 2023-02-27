package ntnu.idatt2105.calculatorbackend.controller;

import ntnu.idatt2105.calculatorbackend.model.Equation;
import ntnu.idatt2105.calculatorbackend.service.EquationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class CalculatorController {

    @Autowired
    EquationService service;

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/calculate")
    public double calculate(String expr){
        Equation eq = new Equation(expr);
        return service.solve(eq);
    }

}
