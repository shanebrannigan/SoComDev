package com.lit.event.planner.security.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class LoginResponse {
	private final Employee employee;
	private final String token;
	private final boolean success;

	private static final LoginResponse failResponse = new LoginResponse(null, null, false);

	public static LoginResponse fail() {
		return failResponse;
	}
}
