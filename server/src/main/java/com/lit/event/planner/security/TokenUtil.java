package com.lit.event.planner.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

/*
 * Here we could encrypt our web token.
 * This is plain text concatenation.
 * You would never actually do this in production.
 */
@Service
public class TokenUtil {
    private final Log logger = LogFactory.getLog(this.getClass());
    private final String secret = "EventPlanner09f5f66b82bb4041a5d6c3b670912323";

    public String extractEmployeeId(String token) {
        try {
            final Claims claims = getClaimsFromToken(token);
            return claims.getSubject();
        } catch (Exception e) {
            return null;
        }
    }

    private Claims getClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
    }

    public String generateToken(String employeeId) {
        return Jwts.builder()
                .setSubject(employeeId)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public Boolean isValidToken(String token) {
        final String employeeId = extractEmployeeId(token);
        return employeeId != null;
    }
}
