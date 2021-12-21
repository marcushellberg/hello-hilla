package dev.hilla.demo;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;

import java.util.List;

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
