package com.crudzao.service;

import com.crudzao.exception.RecordNotFoundException;
import com.crudzao.model.Aula;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

import com.crudzao.repository.AulaRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class AulaService {
  private final AulaRepository aulaRepository;

  public AulaService(AulaRepository aulaRepository) {
    this.aulaRepository = aulaRepository;
  }

  public List<Aula> lista() {
    return aulaRepository.findAll();
  }

  public Aula findById(@PathVariable("id") @NotNull @Positive Long id) {
    return this.aulaRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public Aula create(@Valid Aula aula) {
    if (aula == null) {
      return null;
    }
    return aulaRepository.save(aula);
  }

  public Aula update(@NotNull @Positive Long id, @Valid Aula aula) {
    return aulaRepository.findById(id)
        .map(recordFound -> {
          recordFound.setNome(aula.getNome());
          recordFound.setCategoria(aula.getCategoria());
          return aulaRepository.save(recordFound);
        }).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public void delete(@PathVariable("id") @NotNull @Positive Long id) {
    aulaRepository.delete(
        aulaRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id)));
  }

}
