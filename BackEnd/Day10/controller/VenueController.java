package com.learn.springsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.VenueEntity;
import com.learn.springsecurity.service.VenueService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/venues")
public class VenueController {
    private final VenueService venueService;

    @Autowired
    public VenueController(VenueService venueService) {
        this.venueService = venueService;
    }

    @GetMapping
    public ResponseEntity<List<VenueEntity>> getAllVenues() {
        List<VenueEntity> venues = venueService.getAllVenues();
        return new ResponseEntity<>(venues, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<VenueEntity> getVenueById(@PathVariable Long id) {
        Optional<VenueEntity> venue = venueService.getVenueById(id);
        return venue.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<VenueEntity> createVenue(@RequestBody VenueEntity venue) {
        VenueEntity createdVenue = venueService.createVenue(venue);
        return new ResponseEntity<>(createdVenue, HttpStatus.CREATED);
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<VenueEntity> updateVenue(@PathVariable Long id, @RequestBody VenueEntity venue) {
        VenueEntity updatedVenue = venueService.updateVenue(id, venue);
        return new ResponseEntity<>(updatedVenue, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteVenue(@PathVariable Long id) {
        venueService.deleteVenue(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
