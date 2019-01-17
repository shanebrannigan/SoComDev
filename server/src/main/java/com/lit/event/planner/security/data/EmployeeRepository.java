package com.lit.event.planner.security.data;

import com.lit.event.planner.security.model.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	Optional<Employee> findByEmployeeId(String employeeId);
}
