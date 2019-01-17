package com.lit.event.planner.security.services;

import com.lit.event.planner.security.TokenUtil;
import com.lit.event.planner.security.data.EmployeeRepository;
import com.lit.event.planner.security.model.Employee;
import com.lit.event.planner.security.model.LoginResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityContextEmployeeService implements CurrentEmployeeService, EmployeeLoginService {
    private final Log logger = LogFactory.getLog(this.getClass());

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee getCurrent() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String employeeId = authentication.getName();
            logger.info("Finding employee of current user: " + employeeId);
            return employeeRepository.findByEmployeeId(employeeId)
                    .orElseThrow(() -> new UsernameNotFoundException("Could not find the user '" + employeeId + "'"));
        }

        logger.info("Anonymous request for current user");
        throw new BadCredentialsException("Anonymous user access not permitted");
    }

    public LoginResponse login(String employeeId, String password) {
        logger.info("Setting authentication context");
        final Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(employeeId, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        logger.info("Authenticated " + employeeId);
        return constructLoginResponse(employeeId);
    }

    // TODO: When a user logs in with a known employee ID and password but is not known
    //       on the event system, they will need to be added rather than throw an exception.
    //       QUESTION: What are the upsides of having an internal employee record?
    //       QUESTION: What are the downsides of having an internal employee record?
    private LoginResponse constructLoginResponse(String employeeId) {
        final Employee employee = employeeRepository.findByEmployeeId(employeeId)
                .orElseThrow(() -> new UsernameNotFoundException("User authenticated but not on system"));

        final String token = tokenUtil.generateToken(employeeId);

        return new LoginResponse(employee, token, true);
    }
}