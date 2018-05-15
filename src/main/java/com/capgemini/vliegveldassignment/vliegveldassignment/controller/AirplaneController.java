package com.capgemini.vliegveldassignment.vliegveldassignment.controller;

import com.capgemini.vliegveldassignment.vliegveldassignment.model.Airplane;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.capgemini.vliegveldassignment.vliegveldassignment.repository.IAirplaneRepository;

@RestController
@RequestMapping("/api/airplane")
public class AirplaneController {

    @Autowired
    private IAirplaneRepository airplaneRepository;

    //add an Airplane to the airplane repository
    @PostMapping("/add")
    public Airplane addAirplane(Airplane airplane){
        return airplaneRepository.save(airplane);
    }

    //get an airplane by id
    @GetMapping("/get/{id}")
    public Airplane getAirplane(@PathVariable int id){
        return airplaneRepository.findById(id).isPresent() ? airplaneRepository.findById(id).get() : null;
    }

    //get all airplanes
    @GetMapping("/all")
    public Iterable<Airplane> getAirplanes() {
        return airplaneRepository.findAll();
    }

    //edit an airplane
    @PostMapping("/edit")
    public Airplane editAirplane(Airplane airplane){
        return airplaneRepository.save(airplane);
    }

    //delete an airplane
    @GetMapping("/delete/{id}")
    public Airplane deleteAirplane(@PathVariable int id){
        if(airplaneRepository.findById(id).isPresent()){
            airplaneRepository.deleteById(id);
        }
        return null;
    }
}
