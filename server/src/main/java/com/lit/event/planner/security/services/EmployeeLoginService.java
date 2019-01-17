package com.lit.event.planner.security.services;

import com.lit.event.planner.security.model.LoginResponse;

public interface EmployeeLoginService {
    LoginResponse login(String email, String password);
}
