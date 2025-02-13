package com.web.spring.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





import org.springframework.web.client.RestTemplate;

import com.web.spring.model.Employee;

import com.web.spring.service.EmployeeService;


@RestController
public class EmployeeController {
	Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
		@Autowired
		public EmployeeService service;


	@GetMapping(value = "/admin/{id}")
	public Employee getAddressById(@PathVariable Integer id)
	{
		return service.getEmpById(id);
	}
	
	@PostMapping(value = "/admin")
	public Employee saveAddress(@RequestBody Employee employee) 
	{
		logger.info("details saved in producer service");
		return service.saveEmployee(employee);
	}
	
	@DeleteMapping(value="/admin/{id}")
	public void deleteAdd(@PathVariable Integer id) 
	{
		logger.info("details deleted in producer service");
		service.deleteById(id);
	}
	
	@PostMapping("/admin/{id}")
	public Employee patchUpdate(@PathVariable Integer id, @RequestBody Employee employee)
	{
		Employee add = service.getEmpById(id);
		add.setName(employee.getName());
		return service.UpdateEmployee(employee);
	}
	
	@GetMapping(value="/admin" , produces= {"application/json"})
	public List<Employee> listAddress()
	{
	    return  service.listEmployee();
	}

}








