package com.lit.event.planner.events.controllers;

import com.lit.event.planner.events.model.Event;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

// TODO: Extend model and database schema with Events
// TODO: Add EventRepository
// TODO: Use repository here to find events
@RestController
@RequestMapping("/api/events")
public class EventController {
    @GetMapping()
    public List<Event> getAll() {
        return Arrays.asList(
                new Event("Induction Training Introduction"),
                new Event("Java Training"),
                new Event("Spring training"),
                new Event("JavaScript Training"),
                new Event("Angular Training")
        );
    }
}
