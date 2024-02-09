package com.learn.springsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.EventEntity;
import com.learn.springsecurity.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<EventEntity> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<EventEntity> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public EventEntity createEvent(EventEntity event) {
        return eventRepository.save(event);
    }

    public EventEntity updateEvent(Long id, EventEntity event) {
        event.setId(id); // Make sure the provided event has the correct ID
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
