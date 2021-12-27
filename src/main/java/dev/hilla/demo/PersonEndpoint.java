package dev.hilla.demo;

import java.util.List;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;

@Endpoint
@AnonymousAllowed
public class PersonEndpoint {
    private PersonRepository repository;

    public PersonEndpoint(PersonRepository repository) {
        this.repository = repository;
    }

    public @Nonnull List<@Nonnull Person> findAll() {
        return repository.findAll();
    }
}
