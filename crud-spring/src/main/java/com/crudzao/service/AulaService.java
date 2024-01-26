package com.crudzao.service;

import java.util.stream.Collectors;
import com.crudzao.dto.AulaDTO;
import com.crudzao.dto.mapper.AulaMapper;
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
  private final AulaMapper aulaMapper;

  public AulaService(AulaRepository aulaRepository, AulaMapper aulaMapper) {
    this.aulaRepository = aulaRepository;
    this.aulaMapper = aulaMapper;
  }

  public List<AulaDTO> lista() {
    return aulaRepository.findAll()
        .stream()
        .map(aulaMapper::toDTO).toList();
  }

  public AulaDTO findById(@PathVariable("id") @NotNull @Positive Long id) {
    return this.aulaRepository.findById(id).map(aulaMapper::toDTO)
        .orElseThrow(() -> new RecordNotFoundException(id));
  }

  public AulaDTO create(@Valid @NotNull AulaDTO aula) {
    return aulaMapper.toDTO(aulaRepository.save(aulaMapper.toEntity(aula)));
  }

  public AulaDTO update(@NotNull @Positive Long id, @Valid @NotNull AulaDTO aula) {
    return aulaRepository.findById(id)
        .map(recordFound -> {
          recordFound.setNome(aula.nome());
          recordFound.setCategoria(aula.categoria());
          return aulaMapper.toDTO(aulaRepository.save(recordFound));
        }).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public void delete(@PathVariable("id") @NotNull @Positive Long id) {
    aulaRepository.delete(
        aulaRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id)));
  }

}
