package dev.hilla.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import dev.hilla.demo.entity.Person;

public interface PersonRepository extends JpaRepository<Person, Integer> {

}
