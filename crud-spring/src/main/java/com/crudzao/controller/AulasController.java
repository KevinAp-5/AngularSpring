package com.crudzao.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.crudzao.dto.AulaDTO;
import com.crudzao.model.Aula;
import com.crudzao.service.AulaService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/api/aulas")
public class AulasController {

  private final AulaService aulaService;

  public AulasController(AulaService aulaService) {
    this.aulaService = aulaService;
  }

  @GetMapping
  public List<AulaDTO> lista() {
    return this.aulaService.lista();
  }

  @GetMapping("/{id}")
  public AulaDTO findById(@PathVariable("id") @NotNull @Positive Long id) {
    return aulaService.findById(id);
  }

  @PostMapping
  @ResponseStatus(code = HttpStatus.CREATED)
  public AulaDTO create(@RequestBody @Valid @NotNull AulaDTO aula) {
    return aulaService.create(aula);
  }

  @PutMapping("/{id}")
  public AulaDTO update(@PathVariable("id") @NotNull @Positive Long id,
      @RequestBody @Valid @NotNull AulaDTO aula) {
    return aulaService.update(id, aula);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") @NotNull @Positive Long id) {
    aulaService.delete(id);
  }
}
