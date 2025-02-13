import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class DynamicCodeIssues {

    // Example 1: Using eval-like functionality (JavaScript in Java's ScriptEngine)
    public static void executeUserScript(String userInput) {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("JavaScript");

        try {
            // Risky: Executes user-provided input directly as code
            engine.eval(userInput);
        } catch (ScriptException e) {
            e.printStackTrace();
        }
    }

    // Example 2: Dynamically generating code with Reflection
    public static void generateDynamicCode(String className) {
        try {
            // Risky: Dynamically loads a class based on user input
            Class<?> clazz = Class.forName(className);
            Object instance = clazz.getDeclaredConstructor().newInstance();
            System.out.println("Instance created: " + instance.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Example 3: Using Function-like constructors in Java (Lambda Injection)
    public static Runnable createRunnable(String code) {
        // Risky: Dynamically creating runnable from untrusted source
        Runnable task = () -> {
            try {
                // Hypothetical code execution scenario
                System.out.println("Executing code: " + code);
                // Pretend to execute the code here
            } catch (Exception e) {
                e.printStackTrace();
            }
        };
        return task;
    }

    public static void main(String[] args) {
        // Example 1: eval-like usage
        String userScript = "print('Hello from user script!');";
        executeUserScript(userScript);

        // Example 2: Dynamic class loading
        String userProvidedClass = "java.util.Date";
        generateDynamicCode(userProvidedClass);

        // Example 3: Function-like constructors
        String dynamicCode = "System.out.println('Hello from dynamic code!')";
        Runnable task = createRunnable(dynamicCode);
        task.run();
    }
}
