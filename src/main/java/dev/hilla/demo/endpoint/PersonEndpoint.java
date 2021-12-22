package dev.hilla.demo.endpoint;

import java.util.List;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;
import dev.hilla.demo.entity.Person;
import dev.hilla.demo.repository.PersonRepository;

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
