package com.learn.springsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.VenueEntity;
import com.learn.springsecurity.repository.VenueRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {
    private final VenueRepository venueRepository;

    @Autowired
    public VenueService(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    public List<VenueEntity> getAllVenues() {
        return venueRepository.findAll();
    }

    public Optional<VenueEntity> getVenueById(Long id) {
        return venueRepository.findById(id);
    }

    public VenueEntity createVenue(VenueEntity venue) {
        return venueRepository.save(venue);
    }

    public VenueEntity updateVenue(Long id, VenueEntity venue) {
        venue.setId(id); // Make sure the provided venue has the correct ID
        return venueRepository.save(venue);
    }

    public void deleteVenue(Long id) {
        venueRepository.deleteById(id);
    }
}
