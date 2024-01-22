package com.crudzao.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.crudzao.model.Aula;
import com.crudzao.repository.AulaRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;

@Validated
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
    public ResponseEntity<Aula> findById(
            @PathVariable("id") @NotNull @Positive Long id
        ) {
        return aulaRepository.findById(id)
        .map(recordBody -> ResponseEntity.ok().body(recordBody))
        .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Aula create(@RequestBody @Valid Aula aula) {
        if (aula == null) {
            return null;
        }
        return aulaRepository.save(aula);
    }
   
    @PutMapping("/{id}")
    public ResponseEntity<Aula> update(
            @PathVariable("id")
            @NotNull @Positive Long id,
            @RequestBody @Valid Aula aula
        ) {
        return aulaRepository.findById(id)
            .map(recordFound -> {
                recordFound.setNome(aula.getNome());
                recordFound.setCategoria(aula.getCategoria());
                Aula atualizado = aulaRepository.save(recordFound);
                return ResponseEntity.ok().body(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable("id") @NotNull @Positive Long id
        ) {
        return aulaRepository.findById(id)
        .map(recordFound -> {
            this.aulaRepository.deleteById(id);
            return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
    }
}
