package com.lit.event.planner.security.model;

import lombok.Data;

@Data
public class LoginRequest {
    private String employeeId;
    private String password;

    public boolean isValid() {
        return employeeId != null && password != null;
    }
}
