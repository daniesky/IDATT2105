package ntnu.idatt2105.calculatorbackend.asset;

import ntnu.idatt2105.calculatorbackend.model.Equation;

public class EquationSolver {
    public static double solve(Equation eq) {
        String[] parts = eq.getEq().split("\\s+");
        double result = Double.parseDouble(parts[0]);

        for (int i = 1; i < parts.length; i += 2) {
            String operator = parts[i];
            double operand = Double.parseDouble(parts[i + 1]);

            switch (operator) {
                case "+":
                    result += operand;
                    break;
                case "-":
                    result -= operand;
                    break;
                case "*":
                    result *= operand;
                    break;
                case "/":
                    result /= operand;
                    break;
                default:
                    throw new IllegalArgumentException("Invalid operator: " + operator);
            }
        }

        return result;
    }
}
