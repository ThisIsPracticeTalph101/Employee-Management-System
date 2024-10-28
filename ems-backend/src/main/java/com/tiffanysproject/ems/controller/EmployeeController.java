package com.tiffanysproject.ems.controller;

import com.tiffanysproject.ems.dto.EmployeeDTO;
import com.tiffanysproject.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//fixed the refactoring by removing .git folder from backend
@CrossOrigin("*")
@AllArgsConstructor //to not have to create a constructor manually
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private EmployeeService employeeService;

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDto){
        EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Build GET Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeId(@PathVariable("id") Long employeeId){
        EmployeeDTO employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    //Build GET all Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        List<EmployeeDTO> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);

    }

    //Build UPDATE Employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDTO updatedEmployee){
        EmployeeDTO employeeDTO= employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDTO);
    }

    //Build DELETE Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully!");
    }


}
