package com.example.setsapi.controllers;


import com.example.setsapi.models.SetName;
import com.example.setsapi.repositories.SetNameRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.setsapi.models.SetName;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
public class SetNamesController {

    @Autowired
    private SetNameRepository setRepository;

    @GetMapping("/")
    public Iterable<SetName> findAllSetNames() {
        return setRepository.findAll();
    }

    @GetMapping("/{setNameId}")
    public SetName findSetNameById(@PathVariable Long setNameId) throws NotFoundException {

        SetName foundSetName = setRepository.findOne(setNameId);

        if (foundSetName == null) {
            throw new NotFoundException("SetName with ID of " + setNameId + " was not found!");
        }


        return foundSetName;
    }

    @DeleteMapping("/{setNameId}")
    public HttpStatus deleteSetNameById(@PathVariable Long setNameId) throws EmptyResultDataAccessException {
        setRepository.delete(setNameId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public SetName createNewSetName(@RequestBody SetName newSetName) {
        return setRepository.save(newSetName);
    }

    @PatchMapping("/{setNameId}")
    public SetName updateSetNameById(@PathVariable Long setNameId, @RequestBody SetName setRequest) throws NotFoundException {
        SetName setFromDb = setRepository.findOne(setNameId);

        if (setFromDb == null) {
            throw new NotFoundException("SetName with ID of " + setNameId + " was not found!");
        }

        setFromDb.setSetName(setRequest.getSetName());

        return setRepository.save(setFromDb);
    }

    @ExceptionHandler
    void handleSetNameNotFound(
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
