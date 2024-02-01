package com.crudzao;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.crudzao.enumns.Category;
import com.crudzao.enumns.Status;
import com.crudzao.model.Aula;
import com.crudzao.model.Lesson;
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
      aulinha.setCategoria(Category.BACK_END);
      aulinha.setStatus(Status.ACTIVE);

      Lesson lesson = new Lesson();
      lesson.setAula(aulinha);
      lesson.setNome("Introdução");
      lesson.setYoutubeUrl("CffwDZW3KEU");
      aulinha.getLessons().add(lesson);
      aulaRepository.save(aulinha);
    };
  }
}
