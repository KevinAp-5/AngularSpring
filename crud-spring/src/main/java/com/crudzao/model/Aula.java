package com.crudzao.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import org.hibernate.validator.constraints.Length;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import lombok.Data;

@Data
@Entity
public class Aula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("_id")
    private long id;

    @NotBlank
    @NotNull
    @Length(min = 5, max = 100)
    @Column(length = 102, nullable = false)
    private String nome;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "Back-end|Front-end|Data-base")
    @Column(length = 10, nullable = false)
    private String categoria;

}
