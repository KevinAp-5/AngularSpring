package com.crudzao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.crudzao.model.Aula;

@Bean

@Repository
public interface AulaRepository extends JpaRepository<Aula, Long>{
}
