package dev.hilla.demo.endpoint;

import java.util.List;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;
import dev.hilla.demo.entity.Todo;
import dev.hilla.demo.repository.TodoRepository;

@Endpoint
@AnonymousAllowed
public class TodoEndpoint {
    private final TodoRepository repo;

    public TodoEndpoint(TodoRepository repo) {
        this.repo = repo;
    }

    public @Nonnull List<@Nonnull Todo> findAll() {
        return repo.findAll();
    }

    public @Nonnull Todo save(Todo todo) {
        return repo.save(todo);
    }
}
