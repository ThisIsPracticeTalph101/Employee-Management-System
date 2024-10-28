package com.tiffanysproject.ems.service.impl;

import com.tiffanysproject.ems.dto.EmployeeDTO;
import com.tiffanysproject.ems.entity.Employee;
import com.tiffanysproject.ems.exception.ResourceNotFoundException;
import com.tiffanysproject.ems.mapper.EmployeeMapper;
import com.tiffanysproject.ems.repository.EmployeeRepository;
import com.tiffanysproject.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;


    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee does not exist with given id: " + employeeId));
//        if(!employeeDb.containsKey (employeeId){
//            try{
//                throw new ResourceNotFoundException("Employee does not exist with given id: " + employeeId);
//            } catch (ResourceNotFoundException e) {
//                e.printStackTrace();
//            }
//        }

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees =employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
        .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
            ()-> new ResourceNotFoundException("Employee does not exist with given id: " + employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee does not exist with given id: " + employeeId));

        employeeRepository.deleteById(employeeId);
    }
}
