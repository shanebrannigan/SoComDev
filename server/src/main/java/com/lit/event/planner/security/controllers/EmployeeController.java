package com.lit.event.planner.security.controllers;

import com.lit.event.planner.security.data.EmployeeRepository;
import com.lit.event.planner.security.model.Employee;
import com.lit.event.planner.security.model.LoginRequest;
import com.lit.event.planner.security.model.LoginResponse;
import com.lit.event.planner.security.services.EmployeeLoginService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    private final Log logger = LogFactory.getLog(this.getClass());

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeLoginService employeeLoginService;

    @GetMapping(value = "/check")
    public boolean isLoggedIn(Principal principal) {
        return principal != null;
    }

    // TODO: Secure with Roles or remove
    @GetMapping(value = "/all")
    public Iterable<Employee> getAll() {
        return employeeRepository.findAll();
    }

    @GetMapping(value = "/current")
    public Employee getCurrent(Principal principal) {
        if (principal == null) {
            return null;
        }

        return employeeRepository.findByEmployeeId(principal.getName())
                .orElse(null);
    }

    @PostMapping(value = "/login", produces = "application/json")
    public LoginResponse login(@RequestBody() LoginRequest loginRequest) {
        if (loginRequest == null || !loginRequest.isValid()) {
            logger.info("Invalid login request");
            return LoginResponse.fail();
        }

        try {
            return employeeLoginService.login(loginRequest.getEmployeeId(), loginRequest.getPassword());
        } catch (BadCredentialsException e) {
            return LoginResponse.fail();
        }
    }


}
