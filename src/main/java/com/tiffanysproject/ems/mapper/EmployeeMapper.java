package com.tiffanysproject.ems.mapper;

import com.tiffanysproject.ems.dto.EmployeeDTO;
import com.tiffanysproject.ems.entity.Employee;



public class EmployeeMapper {
    //Used to map Employee entity to Employee DTO
    public static EmployeeDTO mapToEmployeeDto(Employee employee){
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()

        );
    }

    //Used to map Employee DTO to Employee entity
    public static Employee mapToEmployee(EmployeeDTO employeeDTO){
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail()
        );
    }
}
