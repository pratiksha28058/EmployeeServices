package com.web.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class EmployeeServiceApplication {

	public static void main(String[] args) {
		System.setProperty("javax.net.ssl.keyStore", "classpath:client1.p12");
        System.setProperty("javax.net.ssl.keyStorePassword", "changeit");		
		SpringApplication.run(EmployeeServiceApplication.class, args);
		System.out.println("Employee-producer is working.......");
	}

}
