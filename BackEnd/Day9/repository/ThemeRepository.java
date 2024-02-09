package com.learn.springsecurity.repository;

import com.learn.springsecurity.model.ThemeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeRepository extends JpaRepository<ThemeEntity, Long> {
}