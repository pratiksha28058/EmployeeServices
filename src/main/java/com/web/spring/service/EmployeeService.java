package com.web.spring.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.web.spring.model.Employee;
import com.web.spring.repositery.EmployeeRepositery;

@Service
public  class EmployeeService {

	@Autowired
	public EmployeeRepositery repo;
	
	
	public List<Employee> listEmployee()
	
	{
		List<Employee> employee = repo.findAll(); 
		return employee;
	}
	
	
	public Employee saveEmployee(Employee employee) 
	
	{
		return repo.save(employee);
	}


	public void deleteById(Integer id) 
	
	{
		repo.deleteById(id);	
	}
	
	public Employee getEmpById(Integer id)
	
	{
		return repo.findById(id).get();
	}
	
	public Employee UpdateEmployee(Employee employee)
	
	{
		return repo.save(employee);
	}
	

}
