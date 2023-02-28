package ntnu.idatt2105.calculatorbackend.controller;

import ntnu.idatt2105.calculatorbackend.model.Equation;
import ntnu.idatt2105.calculatorbackend.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
public class CalculatorController {

    @Autowired
    CalculatorService service;

    Logger logger = LoggerFactory.getLogger(CalculatorController.class);

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/calculate")
    public double calculate(@RequestBody Equation eq){
        logger.info("Equation: ",eq.getEq(),"=",service.solve(eq));
        if(service.addToLog(eq.getEq())){
            logger.info("Added to log: " + eq.getEq());
        }
        return service.solve(eq);
    }

    @GetMapping("/log")
    public ArrayList<String> log(){
        logger.info("Returned log: " + service.toString());
        return service.getLog();
    }
}
