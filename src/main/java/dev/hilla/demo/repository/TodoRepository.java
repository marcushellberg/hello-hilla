package dev.hilla.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.hilla.demo.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
