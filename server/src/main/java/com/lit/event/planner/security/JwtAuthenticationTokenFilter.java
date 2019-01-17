package com.lit.event.planner.security;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
    private final String PREFIX = "Bearer ";
    private final Log logger = LogFactory.getLog(this.getClass());

    @Autowired
    private TokenUtil tokenUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        String employeeId = extractEmployeeId(request);

        authenticate(request, employeeId);

        chain.doFilter(request, response);
    }

    private void authenticate(HttpServletRequest request, String employeeId) {
        logger.info("Checking authentication for user " + employeeId);
        if (employeeId != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(employeeId, null, null);
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            logger.info("Authenticated user " + employeeId + ", setting security context");
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
    }

    private String extractEmployeeId(HttpServletRequest request) {
        String authorisation = request.getHeader("Authorization");
        if (authorisation != null && authorisation.startsWith(PREFIX)) {
            authorisation = authorisation.replace(PREFIX, "");
            return tokenUtil.extractEmployeeId(authorisation);
        }
        return null;
    }
}
