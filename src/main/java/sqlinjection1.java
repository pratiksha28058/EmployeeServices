import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class sqlinjection1 {
    public void getUser(String username) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "password");
            Statement statement = connection.createStatement();
            String query = "SELECT * FROM users WHERE username = '" + username + "'";
            ResultSet resultSet = statement.executeQuery(query); // Vulnerable to SQL Injection
            while (resultSet.next()) {
                System.out.println("User: " + resultSet.getString("username"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
