package com.learn.springsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.EventEntity;
import com.learn.springsecurity.service.EventService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public ResponseEntity<List<EventEntity>> getAllEvents() {
        List<EventEntity> events = eventService.getAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<EventEntity> getEventById(@PathVariable Long id) {
        Optional<EventEntity> event = eventService.getEventById(id);
        return event.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<EventEntity> createEvent(@RequestBody EventEntity event) {
        EventEntity createdEvent = eventService.createEvent(event);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<EventEntity> updateEvent(@PathVariable Long id, @RequestBody EventEntity event) {
        EventEntity updatedEvent = eventService.updateEvent(id, event);
        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
