package com.crudzao.dto.mapper;

import org.springframework.stereotype.Component;

import com.crudzao.dto.AulaDTO;
import com.crudzao.model.Aula;

@Component
public class AulaMapper {
  public AulaDTO toDTO(Aula aula) {
    if (aula == null) {
      return null;
    }
    return new AulaDTO(aula.getId(), aula.getNome(), aula.getCategoria());
  }

  public Aula toEntity(AulaDTO aulaDTO) {
    if (aulaDTO == null) {
      return null;
    }

    Aula aula = new Aula();
    if (aula.getId() != 0) {
      aula.setId(aulaDTO.id());
    }

    aula.setNome(aulaDTO.nome());
    aula.setCategoria(aulaDTO.categoria());
    aula.setStatus("Active");
    return aula;

  }
}
