package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.springsecurity.model.Theme;

public interface ThemeRepository extends JpaRepository<Theme, Long> {
}
