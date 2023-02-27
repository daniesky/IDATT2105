package ntnu.idatt2105.calculatorbackend.service;

import ntnu.idatt2105.calculatorbackend.asset.EquationSolver;
import org.springframework.stereotype.Service;
import ntnu.idatt2105.calculatorbackend.model.Equation;

@Service
public class EquationService {
    public double solve(Equation e){
        return EquationSolver.solve(e);
    }
}

