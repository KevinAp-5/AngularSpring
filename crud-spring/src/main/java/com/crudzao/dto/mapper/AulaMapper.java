package com.crudzao.dto.mapper;

import org.springframework.stereotype.Component;

import com.crudzao.dto.AulaDTO;
import com.crudzao.enumns.Category;
import com.crudzao.model.Aula;

@Component
public class AulaMapper {
  public AulaDTO toDTO(Aula aula) {
    if (aula == null) {
      return null;
    }

    return new AulaDTO(aula.getId(), aula.getNome(), aula.getCategoria().getValue());
  }

  public Aula toEntity(AulaDTO aulaDTO) {
    if (aulaDTO == null) {
      return null;
    }

    Aula aula = new Aula();
    if (aulaDTO.id() != null) {
      aula.setId(aulaDTO.id());
    }

    String categoria = aulaDTO.categoria();
    if (categoria == null || categoria.isEmpty()) {
      categoria = Category.DATA_BASE.getValue();
    }

    aula.setNome(aulaDTO.nome());
    // TODO use a mapper for category
    aula.setCategoria(this.convertCategoryValue(categoria));

    return aula;
  }

  public Category convertCategoryValue(String value) {
    if (value == null) {
      return null;
    }

    return switch (value) {
      case "Back-end" -> Category.BACK_END;
      case "Front-end" -> Category.FRONT_END;
      case "Data-base" -> Category.DATA_BASE;
      default -> throw new IllegalArgumentException("Categoria inválida" + value);
    };
  }

}
