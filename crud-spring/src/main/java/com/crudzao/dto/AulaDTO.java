package com.crudzao.dto;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record AulaDTO(
    @JsonProperty("id") Long id,
    @NotNull @NotBlank @Length(min = 5, max = 100) String nome,
    @NotNull @Length(max = 10) @Pattern(regexp = "Back-end|Front-end|Data-base") String categoria,
    List<LessonDTO> lessons) {
}
