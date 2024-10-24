package com.tiffanysproject.ems.service.impl;

import com.tiffanysproject.ems.dto.EmployeeDTO;
import com.tiffanysproject.ems.entity.Employee;
import com.tiffanysproject.ems.mapper.EmployeeMapper;
import com.tiffanysproject.ems.repository.EmployeeRepository;
import com.tiffanysproject.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
}
