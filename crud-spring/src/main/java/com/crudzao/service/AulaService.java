package com.crudzao.service;

import com.crudzao.dto.AulaDTO;
import com.crudzao.dto.mapper.AulaMapper;
import com.crudzao.exception.RecordNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;
import java.util.stream.Collectors;

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
        .map(aulaMapper::toDTO)
        .collect(Collectors.toList());
  }

  public AulaDTO findById(@NotNull @Positive Long id) {
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
          recordFound.setCategoria(aulaMapper.convertCategoryValue(aula.categoria()));
          return aulaMapper.toDTO(aulaRepository.save(recordFound));
        }).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public void delete(@NotNull @Positive Long id) {
    aulaRepository.delete(
        aulaRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id)));
  }

}
