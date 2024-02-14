package com.learn.springsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.Theme;
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

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Optional<Theme> getThemeById(Long id) {
        return themeRepository.findById(id);
    }

    public Theme createTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    public Theme updateTheme(Long id, Theme theme) {
        theme.setId(id); // Make sure the provided theme has the correct ID
        return themeRepository.save(theme);
    }

    public String deleteTheme(Long id) {
        themeRepository.deleteById(id);
        return null;
    }
}
