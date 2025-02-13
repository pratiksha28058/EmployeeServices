import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class SQLInjectionExample {
    public void vulnerable(String userInput) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/test", "user", "password");
        Statement stmt = conn.createStatement();
        String query = "SELECT * FROM users WHERE name = '" + userInput + "'";
        stmt.executeQuery(query); // Vulnerable to SQL injection
    }
}
