package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
