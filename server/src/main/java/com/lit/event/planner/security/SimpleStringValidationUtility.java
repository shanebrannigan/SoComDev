package com.lit.event.planner.security;

import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class SimpleStringValidationUtility implements StringValidationUtility {
    private static final int MINIMUM_PASSWORD_LENGTH = 8;

    @Override
    public boolean isValidEmail(String emailAddress) {
        return Pattern.matches("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
                                emailAddress.toUpperCase());
    }

    @Override
    public boolean isValidPassword(String password) {
        return containsLowercaseLetters(password) &&
               containsUppercaseLetters(password) &&
               containsDigits(password) &&
               password.length() >= MINIMUM_PASSWORD_LENGTH;
    }

    private boolean containsDigits(String password) {
        return containsAny(password, "[\\d]");
    }

    private boolean containsUppercaseLetters(String password) {
        return containsAny(password, "[A-Z]");
    }

    private boolean containsLowercaseLetters(String password) {
        return containsAny(password, "[a-z]");
    }

    private boolean containsAny(String password, String regex) {
        return Pattern.matches(".*" + regex + ".*", password);
    }
}
