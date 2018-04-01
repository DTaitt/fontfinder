package com.example.setsapi.controllers;


import com.example.setsapi.models.Set;
import com.example.setsapi.repositories.SetRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.setsapi.models.Set;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
public class SetsController {

    @Autowired
    private SetRepository setRepository;

    @GetMapping("/")
    public Iterable<Set> findAllSets() {
        return setRepository.findAll();
    }

    @GetMapping("/{setId}")
    public Set findSetById(@PathVariable Long setId) throws NotFoundException {

        Set foundSet = setRepository.findOne(setId);

        if (foundSet == null) {
            throw new NotFoundException("Set with ID of " + setId + " was not found!");
        }


        return foundSet;
    }

    @DeleteMapping("/{setId}")
    public HttpStatus deleteSetById(@PathVariable Long setId) throws EmptyResultDataAccessException {
        setRepository.delete(setId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Set createNewSet(@RequestBody Set newSet) {
        return setRepository.save(newSet);
    }

    @PatchMapping("/{setId}")
    public Set updateSetById(@PathVariable Long setId, @RequestBody Set setRequest) throws NotFoundException {
        Set setFromDb = setRepository.findOne(setId);

        if (setFromDb == null) {
            throw new NotFoundException("Set with ID of " + setId + " was not found!");
        }

        setFromDb.setSetName(setRequest.getSetName());
        setFromDb.setFavoriteId(setRequest.getFavoriteId());
        setFromDb.setSetName(setRequest.getSetName());

        return setRepository.save(setFromDb);
    }

    @ExceptionHandler
    void handleSetNotFound(
            NotFoundException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
    }

    @ExceptionHandler
    void handleDeleteNotFoundException(
            EmptyResultDataAccessException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value());
    }
}
