package com.lit.event.planner.security.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="employee")
public class Employee {
	@Id
	private String employeeId;
	private Date createdOn;
	private String email;

	public Employee(String employeeId,
					String email) {
		this();
		this.employeeId = employeeId;
		this.email = email;
		this.createdOn = new Date();
	}

	public Employee() {
	}
}
