package com.crudzao.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import org.hibernate.validator.constraints.Length;

import com.crudzao.enumns.Category;
import com.crudzao.enumns.Status;
import com.crudzao.enumns.converters.CategoryConverter;
import com.crudzao.enumns.converters.StatusConverter;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@SQLDelete(sql = "UPDATE Aula SET status = 'Inactive' where id = ?")
@Where(clause = "status = 'Active'")
public class Aula {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonProperty("_id")
  private long id;

  @NotBlank
  @NotNull
  @Length(min = 5, max = 100)
  @Column(length = 100, nullable = false)
  private String nome;

  @NotNull
  @Column(length = 10, nullable = false)
  @Convert(converter = CategoryConverter.class)
  private Category categoria;

  @NotNull
  @Column(length = 10, nullable = false)
  @Convert(converter = StatusConverter.class)
  private Status status = Status.ACTIVE;
}
