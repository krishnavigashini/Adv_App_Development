package com.learn.springsecurity.repository;

import com.learn.springsecurity.model.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {
    // You can add custom query methods here if needed
}
