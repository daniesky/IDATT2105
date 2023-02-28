package ntnu.idatt2105.calculatorbackend.service;

import ntnu.idatt2105.calculatorbackend.asset.EquationSolver;
import org.springframework.stereotype.Service;
import ntnu.idatt2105.calculatorbackend.model.Equation;

import java.util.ArrayList;

@Service
public class CalculatorService {

    private ArrayList<String> log = new ArrayList<>();

    public double solve(Equation e){
        return EquationSolver.solve(e);
    }
    public boolean addToLog(String toAdd){
        if(log.size() == 0 || !toAdd.equals(log.get(log.size()-1))){
            log.add(toAdd);
            return true;
        }
        return false;
    }

    public ArrayList<String> getLog() {
        return log;
    }
}

