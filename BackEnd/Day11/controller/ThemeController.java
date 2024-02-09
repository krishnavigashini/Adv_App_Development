package com.learn.springsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.ThemeEntity;
import com.learn.springsecurity.service.ThemeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/themes")
public class ThemeController {
    private final ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping
    public ResponseEntity<List<ThemeEntity>> getAllThemes() {
        List<ThemeEntity> themes = themeService.getAllThemes();
        return new ResponseEntity<>(themes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ThemeEntity> getThemeById(@PathVariable Long id) {
        Optional<ThemeEntity> theme = themeService.getThemeById(id);
        return theme.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ThemeEntity> createTheme(@RequestBody ThemeEntity theme) {
        ThemeEntity createdTheme = themeService.createTheme(theme);
        return new ResponseEntity<>(createdTheme, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ThemeEntity> updateTheme(@PathVariable Long id, @RequestBody ThemeEntity theme) {
        ThemeEntity updatedTheme = themeService.updateTheme(id, theme);
        return new ResponseEntity<>(updatedTheme, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTheme(@PathVariable Long id) {
        themeService.deleteTheme(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
