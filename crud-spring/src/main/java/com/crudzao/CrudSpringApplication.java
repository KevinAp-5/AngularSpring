package com.crudzao;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.crudzao.model.Aula;
import com.crudzao.repository.AulaRepository;

@SpringBootApplication
public class CrudSpringApplication {

  public static void main(String[] args) {
    SpringApplication.run(CrudSpringApplication.class, args);
  }

  @Bean
  CommandLineRunner initDataBase(AulaRepository aulaRepository) {
    return args -> {
      aulaRepository.deleteAll();

      Aula aulinha = new Aula();
      aulinha.setNome("Python");
      aulinha.setCategoria("Back-end");
      aulinha.setStatus("Active");
      aulaRepository.save(aulinha);
    };
  }
}
