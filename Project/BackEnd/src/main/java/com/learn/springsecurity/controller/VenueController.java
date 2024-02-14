package com.learn.springsecurity.controller;

import com.learn.springsecurity.model.VenueEntity;
import com.learn.springsecurity.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/venue")
public class VenueController {

    private final VenueService venueService;

    @Autowired
    public VenueController(VenueService venueService) {
        this.venueService = venueService;
    }

    @GetMapping("/")
    public List<VenueEntity> getAllVenues() {
        return venueService.getAllVenues();
    }

    @GetMapping("/{id}")
    public Optional<VenueEntity> getVenueById(@PathVariable long id) {
        return venueService.getVenueById(id);
    }

    @PostMapping("/")
    public VenueEntity createVenue(@RequestBody @NonNull VenueEntity venue) {
        return venueService.createVenue(venue);
    }

    @PutMapping("/{id}")
    public VenueEntity updateVenue(@PathVariable long id, @RequestBody VenueEntity updatedVenue) {
        return venueService.updateVenue(id, updatedVenue);
    }

    @DeleteMapping("/{id}")
    public void deleteVenue(@PathVariable long id) {
        venueService.deleteVenue(id);
    }
}
