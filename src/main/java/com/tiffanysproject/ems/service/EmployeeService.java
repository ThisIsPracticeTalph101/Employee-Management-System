package com.tiffanysproject.ems.service;

import com.tiffanysproject.ems.dto.EmployeeDTO;

import java.util.ArrayList;
import java.util.List;

//controller layer depends on service layer

public interface EmployeeService {

    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long employeeId);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee);

    void deleteEmployee(Long employeeId);
}
