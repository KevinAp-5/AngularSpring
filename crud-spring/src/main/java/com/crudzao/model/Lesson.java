package com.crudzao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import jakarta.persistence.GenerationType;

@Data
@Entity
public class Lesson {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @Column(length = 100, nullable = false)
  private String nome;

  @Column(length = 11, nullable = false)
  private String youtubeUrl;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  private Aula aula;
}
