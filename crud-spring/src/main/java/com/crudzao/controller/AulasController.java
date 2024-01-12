package com.crudzao.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudzao.model.Aula;
import com.crudzao.repository.AulaRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/aulas")
@AllArgsConstructor
public class AulasController {

    private final AulaRepository aulaRepository;

    @GetMapping  // RequestMapping(method = RequestMethod.GET)
    public List<Aula> lista() {
        return aulaRepository.findAll();
    }

}
