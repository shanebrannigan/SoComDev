package com.lit.event.planner.security;

public interface StringValidationUtility {
    boolean isValidEmail(String emailAddress);

    boolean isValidPassword(String password);
}
