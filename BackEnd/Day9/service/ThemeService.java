package com.learn.springsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.ThemeEntity;
import com.learn.springsecurity.repository.ThemeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ThemeService {
    private final ThemeRepository themeRepository;

    @Autowired
    public ThemeService(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    public List<ThemeEntity> getAllThemes() {
        return themeRepository.findAll();
    }

    public Optional<ThemeEntity> getThemeById(Long id) {
        return themeRepository.findById(id);
    }

    public ThemeEntity createTheme(ThemeEntity theme) {
        return themeRepository.save(theme);
    }

    public ThemeEntity updateTheme(Long id, ThemeEntity theme) {
        theme.setId(id); // Make sure the provided theme has the correct ID
        return themeRepository.save(theme);
    }

    public void deleteTheme(Long id) {
        themeRepository.deleteById(id);
    }
}
