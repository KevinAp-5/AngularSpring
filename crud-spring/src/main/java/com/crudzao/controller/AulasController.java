package com.crudzao.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    @GetMapping("/{id}")
    public ResponseEntity<Aula> findById(@PathVariable("id") long id) {
        return aulaRepository.findById(id)
        .map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Aula create(@RequestBody Aula aula) {
        if (aula == null) {
            return null;
        }
        return aulaRepository.save(aula);
    }
   
    @PutMapping("/{id}")
    public ResponseEntity<Aula> update(@PathVariable("id") long id, @RequestBody Aula aula) {
        return aulaRepository.findById(id)
            .map(recordFound -> {
                recordFound.setNome(aula.getNome());
                recordFound.setCategoria(aula.getCategoria());
                Aula atualizado = aulaRepository.save(recordFound);
                return ResponseEntity.ok().body(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
