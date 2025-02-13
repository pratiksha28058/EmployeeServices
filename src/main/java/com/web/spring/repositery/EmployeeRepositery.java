package com.web.spring.repositery;



import org.springframework.data.jpa.repository.JpaRepository;

import com.web.spring.model.Employee;

public interface EmployeeRepositery extends JpaRepository <Employee, Integer> {
	

}
